import { combineReducers } from "redux";
import UserReducer from "../store/user/UserReducer";
import ThemeReducers from "../store/style/ThemeReducer";

export default combineReducers({ UserReducer, ThemeReducers });
