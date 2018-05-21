import React from "react";
import TimeAgo from "react-timeago";
import { Progress } from "react-sweet-progress";

import "react-sweet-progress/lib/style.css";
import "./QuestionDetails.css";

const QuestionDetails = props => {
  const { published_at, question, choices } = props.questionDetail;

  const calculatePercentages = arr => {
    // console.log(arr);
    const total = arr.reduce((a, b) => a + b);
    // console.log(total);
    return arr.map(int => {
      console.log(0 / 0);
      return int !== 0 ? Math.floor(int / total * 100) : 0;
    });
  };
  console.log(choices && calculatePercentages(choices.map(el => el.votes)));
  const percentageArray =
    choices && calculatePercentages(choices.map(el => el.votes));
  return (
    <div>
      <h1>Questions Details</h1>
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
