// src/redux/store.js
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import loginReducer from "./loginSlice";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: loginReducer
})

export default rootReducer;