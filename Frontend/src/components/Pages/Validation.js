const Validation = ( user) => {

    let errors = {};

    if(!user.userName){
        errors.userName = "User Name is required."
    }
    if(!user.fullName){
        errors.fullName = "Full Name is required."
    }

    if(!user.email){
        errors.email = "Email is required."
    } else if(!/\S+@\S+\.S+/.test(user.email)){
        errors.email = "Email is invalid."
    }

    if(!user.password){
        errors.password = "Password is required."
    } else if ( user.password.length < 8 ){
        errors.password = "Password must be more than 8 characters."
    }

    if(!user.confirmPassword){
        errors.confirmPassword = "Confirm your Password."
    }

  return errors;
};
export default Validation;
