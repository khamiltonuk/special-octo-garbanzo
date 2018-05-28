import React from "react";
import TimeAgo from "react-timeago";
import { Progress } from "react-sweet-progress";
import { Link } from "react-router-dom";
import { branch, renderComponent } from "recompose";
import Loader from "../Loader/Loader";

import "react-sweet-progress/lib/style.css";
import "./QuestionDetails.css";

export const calculatePercentages = arr => {
  const total = arr.reduce((a, b) => a + b);
  return arr.map(int => {
    return int !== 0 ? Math.floor(int / total * 100) : 0;
  });
};

export const QuestionDetails = props => {
  const { published_at, question, choices } = props.questionDetails;

  const percentageArray =
    choices && calculatePercentages(choices.map(el => el.votes));

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(event.target);
    props.questionVote(data);
  }
  return (
    <div>
      <h1>{question}</h1>
      <form method="GET" id="my_form" onSubmit={handleSubmit}>
        <table className="leader-board">
          <thead>
            <tr>
              <th>choice</th>
              <th>votes</th>
              <th>percentage</th>
            </tr>
          </thead>
          <tbody>
            {choices &&
              choices.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <input
                        type="radio"
                        id={`choice-${i}`}
                        name="vote"
                        value={el.url}
                      />
                    </td>
                    <td>
                      <label htmlFor={`choice-${i}`}>{el.choice}</label>
                    </td>
                    <td>{el.votes}</td>
                    <td>
                      <Progress percent={percentageArray[i]} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button type="submit">Vote</button>
      </form>
      <p>
        Published: <TimeAgo date={published_at} />
      </p>
      <Link to="/">Back to questions</Link>
    </div>
  );
};

export default branch(props => {
  return props.global.loading === true;
}, renderComponent(Loader))(QuestionDetails);
