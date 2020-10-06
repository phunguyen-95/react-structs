import { userReducer } from "./post/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  post: userReducer,
});
