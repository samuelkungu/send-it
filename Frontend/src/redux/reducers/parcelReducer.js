import { IS_LOADING , CREATE_PARCEL_SUCCESS , UPDATE_PARCEL_SUCCESS , SET_PARCEL_ERROR } from "../types";

const initialState = {
    parcelData: [],
    error: [],
    isLoading: false
  
};

const parcelReducer = (state = initialState, action) => {

    switch (action.type) {

            case IS_LOADING:

                return { ...state, isLoading: action.bool };

            case CREATE_PARCEL_SUCCESS:

                return { ...state, data: [...state.data, action.parcel], error: "" };

            case SET_PARCEL_ERROR:

                return {...state,error: action.error.msg,parcelData: [] };

            case UPDATE_PARCEL_SUCCESS:
                
                const mappedData = state.data.map((parcel) => {
                    if (parcel.id === action.parcel.id) {
                    parcel = action.parcel;
                    } return parcel; });
                return { ...state, data: mappedData };
                
    default:
        return { ...state };
    }
};

export default parcelReducer;



