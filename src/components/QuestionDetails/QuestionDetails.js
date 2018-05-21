import React from "react";
import TimeAgo from "react-timeago";
import "./QuestionDetails.css";

const QuestionDetails = props => {
  const { published_at, question, choices } = props.questionDetail;

  const calculatePercentages = arr => {
    const total = arr.reduce((a, b) => a + b);
    return arr.map(int => {
      return Math.floor(int / total * 100);
    });
  };

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
                  <td>{percentageArray[i]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionDetails;
