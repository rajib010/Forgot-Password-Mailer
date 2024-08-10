import { useNavigate } from "react-router-dom";

const useHandleReset = () => {
    const navigate = useNavigate();

    const handleReset = async (token, newPassword, confirmPassword) => {
        try {
            const res = await fetch(`http://localhost:8080/api/user/reset-password/${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newPassword, confirmPassword })
            });

            console.log(res);
            

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Error in resetting password');
            }

            const data = await res.json();
            console.log('Password reset successful');
            navigate("/");
        } catch (e) {
            console.error('Password reset error:', e.message || e);
        }
    };

    return { handleReset };
};

export default useHandleReset;
