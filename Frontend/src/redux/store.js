import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import userReducer from "./reducers/userReducer";
import parcelReducer from "./reducers/parcelReducer";

const rootReducer = combineReducers({
        user: userReducer,
        parcel: parcelReducer,

});

const store = createStore(rootReducer, composeWithDevTools());

export default store;