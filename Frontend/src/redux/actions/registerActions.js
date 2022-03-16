import { REGISTER_USER } from "../types";

const registerUser = () => {
    return{
        type : REGISTER_USER ,
        payload : register,
   };
   };

   export { registerUser };