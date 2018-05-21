import React from "react";
import "./Questions.css";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";

const Questions = props => {
  const { questions } = props;
  return (
    <div className="questions">
      <h1>Questions</h1>
      <ul className="question-list">
        {questions &&
          questions.map((el, i) => {
            return (
              <li key={i}>
                <Link to={el.url}>
                  <h2>{el.question}</h2>
                  <TimeAgo date={el.published_at} />
                  <p>{el.choices.length} Choices</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Questions;
