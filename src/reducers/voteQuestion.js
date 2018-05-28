import { QUESTION_VOTE } from "./../constants/actionTypes";

const initialState = [];

function voteQuestion(state = initialState, { type, payload }) {
  switch (type) {
    case QUESTION_VOTE:
      return payload;
    default:
      return state;
  }
}

export default voteQuestion;
