import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import userReducer from "./reducers/userReducer";
import parcelsReducer from "./reducers/parcelsReducer";

const rootReducer = combineReducers({
        user: userReducer,
        parcels: parcelsReducer,

});

const store = createStore(rootReducer, composeWithDevTools());

export default store;