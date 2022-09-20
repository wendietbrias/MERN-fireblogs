import { combineReducers } from "redux";
import AuthHandler from "./auth";
import PostHandler from "./post";
import AlertHandler from "./alert";

export default combineReducers({
  auth: AuthHandler,
  post: PostHandler,
  alert: AlertHandler,
});
