import React, { useState } from 'react'
import useRegister from '../../hooks/useRegister.js';

function index() {
    const { register } = useRegister();

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(userName, email, password);
    }
    return (
        <div className='flex items-center justify-center min-h-screen min-w-md bg-slate-700'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <h1 className='text-white text-3xl'>Enter your Login Details</h1>
                <input type="text" className='max-w-md h-10 p-5 rounded-md' placeholder='UserName'
                    value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="email" className='max-w-md h-10 p-5 rounded-md' placeholder='youremail@gmail.com'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className='max-w-md h-10 p-5 rounded-md' placeholder='*****'
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type='submit' className='border border-collapse p-2 rounded-md bg-blue-800 text-white'>Register</button>
            </form>

        </div>
    )
}

export default index