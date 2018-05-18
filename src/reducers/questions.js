import { FETCH_QUESTIONS_SUCCESS } from "./../constants/actionTypes";

const initialState = [];

function questions(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_QUESTIONS_SUCCESS:
      return payload;
    default:
      return state;
  }
}

export default questions;
