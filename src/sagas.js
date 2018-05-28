import { call, put, all, takeLatest } from "redux-saga/effects";

import {
  FETCH_QUESTIONS,
  FETCH_QUESTION_DETAILS,
  QUESTION_VOTE
} from "./constants/actionTypes";
import {
  fetchQuestionsSucess,
  fetchQuestionsError,
  fetchQuestionDetailsSuccess,
  fetchQuestionDetailsError,
  questionVoteSucess,
  questionVoteError
} from "./actions";

import { fetchData, fetchQuestionDetails, postQuestionVote } from "./api";

// Worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    //console.log(formData);

    const data = yield call(fetchData);
    yield put(fetchQuestionsSucess(data));
  } catch (e) {
    yield put(fetchQuestionsError(e));
  }
}

function* getQuestionDetails(action) {
  try {
    //console.log(formData);

    const data = yield call(fetchQuestionDetails, action.id);
    yield put(fetchQuestionDetailsSuccess(data));
  } catch (e) {
    yield put(fetchQuestionDetailsError(e));
  }
}

function* sendQuestionVote(action) {
  try {
    //console.log(action);

    const data = yield call(postQuestionVote, action.payload);
    yield put(questionVoteSucess(data));
  } catch (e) {
    yield put(questionVoteError(e));
  }
}

/* Does not allow concurrent fetches of the user.
If `FETCH_QUESTIONS` gets dispatched while a fetch is already pending, 
that pending fetch is cancelled and only the latest will run */
export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_QUESTIONS, getApiData),
    takeLatest(FETCH_QUESTION_DETAILS, getQuestionDetails),
    takeLatest(QUESTION_VOTE, sendQuestionVote)
  ]);
}
