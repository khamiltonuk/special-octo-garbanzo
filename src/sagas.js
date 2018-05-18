import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_QUESTIONS } from "./constants/actionTypes";
import { fetchQuestionsSucess, fetchQuestionsError } from "./actions/actions";

import fetchData from "./api";

// Worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    //do app call
    const data = yield call(fetchData);
    console.log(data);
    yield put(fetchQuestionsSucess(data));
  } catch (e) {
    yield put(fetchQuestionsError(e));
    console.log(e);
  }
}

/* Does not allow concurrent fetches of the user.
If `FETCH_QUESTIONS` gets dispatched while a fetch is already pending, 
that pending fetch is cancelled and only the latest will run */
export default function* mySaga() {
  yield takeLatest(FETCH_QUESTIONS, getApiData);
}
