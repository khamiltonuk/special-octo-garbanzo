import React from "react";
import "./Questions.css";

const QuestionsSkeleton = () => {
  return (
    <div className="questions">
      <h1>Questions</h1>
      <ul className="question-list">
        {[...Array(10)].map((el, i) => {
          return (
            <li key={i}>
              <div className="skeleton-header" />
              <div className="skeleton-time" />
              <div className="skeleton-text" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionsSkeleton;
