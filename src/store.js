import { createStore, compose } from "redux";

import reducer from "./reducers/index";

import questions from "./mockData/questions";

const defaultState = {
  questions
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, defaultState, enhancers);

export default store;
