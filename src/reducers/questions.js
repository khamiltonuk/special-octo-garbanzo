import { FETCH_QUESTIONS_SUCCESS } from "./../constants/actionTypes";

const initialState = [];

function questions(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default questions;
