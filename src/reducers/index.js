import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import questions from "./questions";
import questionDetails from "./questionDetails";
import global from "./global";
import voteQuestion from "./voteQuestion";

const rootReducer = combineReducers({
  questions,
  questionDetails,
  global,
  voteQuestion,
  routing: routerReducer
});

export default rootReducer;
