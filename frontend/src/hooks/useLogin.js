import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const login = async (email, password) => {
        try {
            const res = await fetch("/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Login failed');
            }
            const data = await res.json();
            console.log('User signed in successfully');
            navigate("/home")

        } catch (e) {
            console.error('Error in login', e);
            setError(e.message);
        }
    };

    return { login, error };
};

export default useLogin;
