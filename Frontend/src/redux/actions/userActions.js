import { REGISTER_USER } from "../types";

const registerUser = () => {
    return{
        type : REGISTER_USER ,
        payload : register,
   };
   };


   const loginUser = () => {
    return{
        type : LOGIN_USER ,
        payload : credentials,
   };
   };

   export { registerUser, loginUser };