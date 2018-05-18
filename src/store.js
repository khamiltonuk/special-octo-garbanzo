import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import mySaga from "./sagas";

import reducer from "./reducers/index";
const sagaMiddleware = createSagaMiddleware();

// import questions from "./mockData/questions";

// const defaultState = {
//   questions
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

export default store;
