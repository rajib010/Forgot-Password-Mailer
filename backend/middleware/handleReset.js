import bcrypt from 'bcryptjs';
import User from '../models/index.js';
import { generateResetToken, sendResetEmail } from './nodeMailer.js'

const reqPasswordReset = async function (email) {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found")
    }
    const resetToken = generateResetToken();
    user.resetToken = resetToken;
    user.resetTokenExpires = Date.now() + 36000;
    await user.save();

    await sendResetEmail(email, resetToken)
}


const rstPassword = async function (token, newPassword) {
    const user = await User.findOne({
        resetToken: token,
        resetTokenExpires: { $gt: Date.now() }
    });

    if (!user) {
        throw new Error('Password reset token is invalid or has expired')
    }
    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;
    await user.save();
}
export { reqPasswordReset, rstPassword }