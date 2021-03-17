import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
    createStore(
        rootReducer, 
        preloadedState, 
        applyMiddleware(thunk, logger)
                );

export default configureStore;

// reducer is require that receives the app's current state and incoming actions
// preloadedstate is optional, representing any application state taht existed before thr store was created
// 