import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTION_DETAILS_SUCCESS
} from "./../constants/actionTypes";

const initialState = [];

function questions(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_QUESTIONS_SUCCESS:
      return payload;
    case FETCH_QUESTION_DETAILS_SUCCESS:
      return payload;
    default:
      return state;
  }
}

export default questions;
