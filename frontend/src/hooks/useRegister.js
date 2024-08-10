// useRegister.js
const useRegister = () => {
    const register = async (userName, email, password) => {
        try {
            const res = await fetch("/api/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userName, email, password })
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Registration Failed");
            }

            const data = await res.json();
            console.log('User registered successfully');
        } catch (error) {
            console.log('Error in registering user', error);
        }
    };

    return { register }; 
};

export default useRegister;
