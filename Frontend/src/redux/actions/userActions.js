import { REGISTER_USER , LOGIN_USER , SET_USER_ERROR , USER_LOG_OUT , USER_AUTH_SUCCESS, IS_LOADING } from "../types";

const registerUser = () => {
    return{
        type : REGISTER_USER ,
        user
   };
   };


   const loginUser = () => {
    return{
        type : LOGIN_USER ,
        user
   };
   };

   const isLoading = bool => {
    return{
    type: IS_LOADING,
    bool
 
    };
    };

  
  export const userAuthSuccess = () => {
    return{
    type: USER_AUTH_SUCCESS,
    user
 
    };
    };

  
  const userAuthFailure = () => {
    return{
    type: SET_USER_ERROR,
    error

    };
    };

  
  const userLogoutSuccess = () => {
    return{
    type: USER_LOG_OUT,

};
};




   export { registerUser, loginUser , isLoading , userAuthSuccess , userAuthFailure , userLogoutSuccess };