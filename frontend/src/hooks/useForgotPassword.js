const useForgotPassword = () => {
    const forgotPassword = async (email) => {
        try {
            const res = await fetch("/api/user/forgot-password", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ email })
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Error in sending email");
            }

            const data = await res.json();
            console.log("Email sent successfully");
        } catch (error) {
            console.error("Error in sending email:", error.message || error);
        }
    };

    return { forgotPassword };
};

export default useForgotPassword;
