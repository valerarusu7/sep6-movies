import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducer";

export const store = configureStore({ reducer: reducers, middleware: [thunk] });

export default store;
