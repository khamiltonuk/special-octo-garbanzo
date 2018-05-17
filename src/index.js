import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";

import Questions from "./components/Questions/Questions";
import QuestionDetails from "./components/QuestionDetails/QuestionDetails";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Questions} />
        <Route path="/question/:questionId" component={QuestionDetails} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
