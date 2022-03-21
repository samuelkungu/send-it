import { REGISTER_USER , LOGIN_USER , SET_USER_ERROR , USER_LOG_OUT , USER_AUTH_SUCCESS, IS_LOADING } from "../types";

const initialState = {
    isLoading: false,
    userData: [],
    userError:[]
}

const userReducer = ( state = initialState, action ) => {
    switch (action.type) {

                case IS_LOADING:
                    return { ...state, isLoading: action.bool };

                case REGISTER_USER:

                    return { ...state, register: [ ...state.register, action.payload] };

                case LOGIN_USER:

                    return { ...state, login: [ ...state.login, action.payload] };

                case USER_AUTH_SUCCESS:

                    return { ...state, userData: action.user, userError: [] };
              
                case SET_USER_ERROR:

                    return {...state,userError: action.error,userData: []};
              
                case USER_LOG_OUT:
                    
                    return initialState;
                
            
    default:
        return { ...state };
    }
};



export default userReducer;