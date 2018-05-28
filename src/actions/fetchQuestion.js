import * as types from "./../constants/actionTypes";

export function fetchQuestions() {
  return {
    type: types.FETCH_QUESTIONS
  };
}

export function fetchQuestionsSucess(payload) {
  return {
    type: types.FETCH_QUESTIONS_SUCCESS,
    payload
  };
}

export function fetchQuestionsError(payload) {
  return {
    type: types.FETCH_QUESTIONS_ERROR,
    payload
  };
}
