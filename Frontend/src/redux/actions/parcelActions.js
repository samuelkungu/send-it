import { IS_LOADING , CREATE_PARCEL_SUCCESS , UPDATE_PARCEL_SUCCESS , SET_PARCEL_ERROR } from "../types";

const isLoading = bool => {
    return{
    type: IS_LOADING,
    bool
  };
   };
  
  const createParcelSuccess  = () => {
    return{
    type: CREATE_PARCEL_SUCCESS,
    parcel
  };
   };
  
  const updateParcelSuccess  = () => {
    return{
    type: UPDATE_PARCEL_SUCCESS,
    parcel
  };
   };

   const parcelsFailure  = () => {
    return{
    type: SET_PARCEL_ERROR,
    error
  };
   };

   export { isLoading , createParcelSuccess , updateParcelSuccess , parcelsFailure };