import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTION_DETAILS_SUCCESS,
  FETCH_QUESTION_DETAILS_ERROR,
  FETCH_QUESTIONS_ERROR
} from "./../constants/actionTypes";

const initialState = { loading: true, error: false };

function global(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, loading: false };
    case FETCH_QUESTION_DETAILS_SUCCESS:
      return { ...state, loading: false };
    case FETCH_QUESTIONS_ERROR:
      return { ...state, error: true };
    case FETCH_QUESTION_DETAILS_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}

export default global;
