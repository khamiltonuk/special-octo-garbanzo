import { call, put, all, takeLatest } from "redux-saga/effects";

import {
  FETCH_QUESTIONS,
  FETCH_QUESTION_DETAILS
} from "./constants/actionTypes";
import {
  fetchQuestionsSucess,
  fetchQuestionsError,
  fetchQuestionDetailsSuccess,
  fetchQuestionDetailsError
} from "./actions/actions";

import { fetchData, fetchQuestionDetails } from "./api";

// Worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    //do app call
    const data = yield call(fetchData);
    yield put(fetchQuestionsSucess(data));
  } catch (e) {
    yield put(fetchQuestionsError(e));
    console.log(e);
  }
}

function* getQuestionDetails(action) {
  try {
    //do app call
    const data = yield call(fetchQuestionDetails);
    console.log(data);
    yield put(fetchQuestionDetailsSuccess(data));
  } catch (e) {
    yield put(fetchQuestionDetailsError(e));
    console.log(e);
  }
}

/* Does not allow concurrent fetches of the user.
If `FETCH_QUESTIONS` gets dispatched while a fetch is already pending, 
that pending fetch is cancelled and only the latest will run */
export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_QUESTIONS, getApiData),
    takeLatest(FETCH_QUESTION_DETAILS, getQuestionDetails)
  ]);
}
