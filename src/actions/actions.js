import * as types from "./../actions/actions";

export function fetchQuestions(payload) {
  return {
    type: types.FETCH_QUESTIONS,
    payload
  };
}

// export function fetchQuestionsSuccess(payload) {
//   return {
//     type: types.FETCH_QUESTIONS_SUCCESS,
//     payload
//   };
// }

// export function fetchQuestionsError(payload) {
//   return {
//     type: types.FETCH_QUESTIONS_ERROR,
//     payload
//   };
// }
