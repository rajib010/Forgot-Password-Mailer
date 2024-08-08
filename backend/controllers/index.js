import bcrypt from 'bcryptjs'
import { User } from '../models/index.js';

const registerUser = async function (req, res) {
    const { userName, email, password } = req.body;
    try {
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        const hashPassword = await bcrypt.hash(password, 10); 

        const newUser = await User.create({
            userName,
            email,
            password: hashPassword
        });

        if (newUser) {
            return res.status(201).json({ message: 'User registered successfully' });
        }
    } catch (error) {
        console.error('Error registering new user:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const loginUser = async function (req, res) {
    const { email, password } = req.body;
    if (!(email && password)) {
        return res.status(400).json({ message: 'username and password is required' })
    }
    const user = await User.findOne({ email });
    if (user) {
        const dbPw = user.password;
        const stat = await bcrypt.compare(password, dbPw);
        if (stat) {
            return res.status(200).json({
                userId: user._id,
                userName: user.userName,
                userEmail: user.email,
                message: 'Logged in successfully'
            });
        } else {
            return res.status(400).json({ message: 'invalid password' });
        }
    } else {
        return res.status(400).json({ message: 'User not found' });
    }
}




export { registerUser, loginUser }