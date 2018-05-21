import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import questions from "./questions";
import questionDetails from "./questionDetails";
import global from "./global";

const rootReducer = combineReducers({
  questions,
  questionDetails,
  global,
  routing: routerReducer
});

export default rootReducer;
