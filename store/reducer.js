import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/authReducer";
import moviesReducer from "./reducers/moviesReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const reducers = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
});

export default persistReducer(persistConfig, reducers);
