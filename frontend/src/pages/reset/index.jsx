import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import useHandleReset from '../../hooks/useResetPassword';

function Index() {
    const { handleReset } = useHandleReset();
    const location = useLocation();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Extract token from URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (token) {
            await handleReset(token, password, confirmPassword); 
        } else {
            console.error('Token not found in URL');
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen min-w-md bg-slate-700'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <h1 className='text-white text-3xl'>Enter New Password</h1>
                <input 
                    type="password" 
                    className='max-w-md h-10 p-5 rounded-md' 
                    placeholder='Enter new password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    type="password" 
                    className='max-w-md h-10 p-5 rounded-md' 
                    placeholder='Confirm new password' 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <button 
                    type='submit' 
                    className='border border-collapse p-2 rounded-md bg-blue-800 text-white'
                >
                    Change Password
                </button>
            </form>
        </div>
    );
}

export default Index;
