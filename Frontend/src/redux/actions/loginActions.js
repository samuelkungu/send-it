import {LOGIN_USER } from "../types";

const loginUser = () => {
 return{
     type : LOGIN_USER ,
     payload : credentials,
};
};

export { loginUser };