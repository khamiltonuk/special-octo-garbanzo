import * as types from "./../constants/actionTypes";

export function fetchQuestionDetails(id) {
  return {
    type: types.FETCH_QUESTION_DETAILS,
    id
  };
}
export function fetchQuestionDetailsSuccess(payload) {
  return {
    type: types.FETCH_QUESTION_DETAILS_SUCCESS,
    payload
  };
}

export function fetchQuestionDetailsError(payload) {
  return {
    type: types.FETCH_QUESTION_DETAILS_ERROR,
    payload
  };
}
