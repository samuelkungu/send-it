import { REGISTER_USER } from "../types";

const initialState = {
    register : [],
}

const registerReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case REGISTER_USER:

            return { ...state, register: [ ...state.register, action.payload] };
            
    default:
        return { ...state };
    }
};

export default registerReducer;