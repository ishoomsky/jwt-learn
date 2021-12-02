import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userListReducer } from "./userListReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  userList: userListReducer
});
