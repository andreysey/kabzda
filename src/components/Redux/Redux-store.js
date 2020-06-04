import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer
    });

let store = createStore(reducers);

window.store = store;

export default store;
