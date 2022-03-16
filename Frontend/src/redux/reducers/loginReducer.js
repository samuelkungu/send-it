import { LOGIN_USER } from "../types";

const initialState = {
   login: [],
  
};

const loginReducer = (state = initialState, action) => {

        switch (action.type) {

            case LOGIN_USER:

                return { ...state, login: [ ...state.login, action.payload] };
                
            default:
                return { ...state };
        }
};

export default loginReducer;



