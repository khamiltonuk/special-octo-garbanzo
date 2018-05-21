import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import questions from "./questions";
import global from "./global";

const rootReducer = combineReducers({
  questions,
  global,
  routing: routerReducer
});

export default rootReducer;
