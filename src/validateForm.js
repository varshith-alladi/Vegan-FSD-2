const signupValidate = (values) => {
    const errors = {};
    const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if(!values.username){
        errors.username = "Username is required!";
    }
    if(!values.email){
        errors.email = "Email is required!";
    }
    else if(!regex.test(values.email)){
        errors.email = "Enter a valid email!";
    }
    if(!values.password){
        errors.password = "Password is required!";
    }
    else if(values.password.length < 8){
        errors.password = "Password must be atleast 8 characters!";
    }
    else if(values.password.length > 14){
        errors.password = "Password should be less than 14 characters!";
    }
    if(!values.confirmPassword){
        errors.confirmPassword = "Password is required!";
    }
    else if(values.confirmPassword.length < 8){
        errors.confirmPassword = "Password must be atleast 8 characters!";
    }
    else if(values.confirmPassword.length > 14){
        errors.confirmPassword = "Password should be less than 14 characters!";
    }
    else if(values.confirmPassword !== values.password){
        errors.confirmPassword = "Passwords donot match!"
    }
    return errors;
}


const loginValidate = (values) => {
    
    const errors = {};
    const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    
    if(!values.email){
        errors.email = "Email is required!";
    }
    else if(!regex.test(values.email)){
        errors.email = "Enter a valid email!";
    }
    if(!values.password){
        errors.password = "Password is required!";
    }
    else if(values.password.length < 8){
        errors.password = "Password must be atleast 8 characters!";
    }
    else if(values.password.length > 14){
        errors.password = "Password should be less than 14 characters!";
    }

    return errors;
}

export {signupValidate, loginValidate};