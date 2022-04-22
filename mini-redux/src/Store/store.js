import { configureStore } from "@reduxjs/toolkit";
//import { combineReducers } from "redux";
import ArticleReducer from "../Reducer/ArticleReducer";



const store = configureStore({reducer: ArticleReducer});

export default store;