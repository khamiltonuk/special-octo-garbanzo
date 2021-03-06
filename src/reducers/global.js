import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTION_DETAILS_SUCCESS,
  FETCH_QUESTION_DETAILS_ERROR,
  FETCH_QUESTIONS_ERROR,
  FETCH_QUESTIONS,
  FETCH_QUESTION_DETAILS
} from "./../constants/actionTypes";

const initialState = { loading: true, error: false };

function global(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_QUESTION_DETAILS:
      return { ...state, loading: true };
    case FETCH_QUESTIONS:
      return { ...state, loading: true };
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, loading: false };
    case FETCH_QUESTION_DETAILS_SUCCESS:
      return { ...state, loading: false };
    case FETCH_QUESTIONS_ERROR:
      return { ...state, loading: false, error: true };
    case FETCH_QUESTION_DETAILS_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export default global;
