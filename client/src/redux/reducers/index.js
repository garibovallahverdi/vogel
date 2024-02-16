import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import postReducer from "./post.reducer";
import userReducer from "./userReducer";
import followReducer from "./followReducer";
import reciviedUserReducer from "./reciviedUserReducer";
import getTimeLineReducer from "./gettimeline.reducer";
  const reducers = combineReducers({authReducer,postReducer,userReducer,getTimeLineReducer,reciviedUserReducer,followReducer})

  export default reducers
