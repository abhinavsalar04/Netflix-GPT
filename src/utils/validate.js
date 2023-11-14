export const validateFields = (email, password) => {
    // const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);

    if(!isValidEmail) return "Email ID or password is invalid!";
    if(!isValidPassword) return "Password is invalid!";

    return null;
}

