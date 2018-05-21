import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";

import QuestionsContainer from "./components/Questions/QuestionsContainer";
import QuestionDetailsContainer from "./components/QuestionDetails/QuestionDetailsContainer";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={QuestionsContainer} />
        <Route
          path="/questions/:questionId"
          component={QuestionDetailsContainer}
        />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
