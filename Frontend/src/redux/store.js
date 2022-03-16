import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/registerReducer";

const rootReducer = combineReducers({
        loginsState : loginReducer,
        registerState : registerReducer,

});

const store = createStore(rootReducer, composeWithDevTools());

export default store;