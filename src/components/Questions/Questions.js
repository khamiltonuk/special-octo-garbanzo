import React from "react";
import "./Questions.css";
import TimeAgo from "react-timeago";

const Questions = props => {
  return (
    <div className="questions">
      <h1>Questions</h1>
      <ul className="question-list">
        {props.questions.map((el, i) => {
          return (
            <li key={i}>
              <a href={el.url}>
                <h2>{el.question}</h2>
                <TimeAgo date={el.published_at} />
                <p>{el.choices.length} Choices</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Questions;
