import React from "react";
import TimeAgo from "react-timeago";
import { Progress } from "react-sweet-progress";
import { Link } from "react-router-dom";

import "react-sweet-progress/lib/style.css";
import "./QuestionDetails.css";

export const calculatePercentages = arr => {
  const max = Math.max(...arr);
  return arr.map(int => {
    return int !== 0 ? Math.floor(int / max * 100) : 0;
  });
};

const QuestionDetails = props => {
  const { published_at, question, choices } = props.questionDetail;

  const percentageArray = calculatePercentages(choices.map(el => el.votes));
  return (
    <div>
      <h1>Questions Details</h1>
      <Link to="/">Back to questions</Link>
      <p>{question}</p>
      <p>
        Published: <TimeAgo date={published_at} />
      </p>

      <h2>Choices</h2>
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
                  <td>{el.choice}</td>
                  <td>{el.votes}</td>
                  <td>
                    <Progress percent={percentageArray[i]} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionDetails;
