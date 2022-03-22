import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {userLoginReducer,userSignUpReducer }from "./reducers/userReducer";
import parcelReducer from "./reducers/parcelReducer";


const rootReducer = combineReducers({
        userLogin: userLoginReducer,
        userRegister: userSignUpReducer,
        parcel: parcelReducer,

});
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
        userLogin: { userInfo: userInfoFromLocalStorage },
       
      }

const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
)

export default store;