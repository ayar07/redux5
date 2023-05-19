import { configureStore, combineReducers } from "@reduxjs/toolkit"
import booksReducer from "./redusers/bookSlice"
import bookReducer from "./redusers/OneBookSlice";
const rootReducer = combineReducers({
    booksReducer,
    bookReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;