import { createStore, compose } from "redux";

import reducer from "./reducers/index";

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, enhancers);

export default store;
