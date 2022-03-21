const isLoading = bool => {
    return{
    type: actionTypes.IS_LOADING,
    bool
  };
   };
  
  const createParcelSuccess  = () => {
    return{
    type: actionTypes.CREATE_PARCEL_SUCCESS,
    payload : [],
  };
   };
  
  const updateParcelSuccess  = () => {
    return{
    type: actionTypes.UPDATE_PARCEL_SUCCESS,
    payload : [],
  };
   };

   export {isLoading , createParcelSuccess , updateParcelSuccess};