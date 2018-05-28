import * as types from "./../constants/actionTypes";

export function questionVote(payload) {
  return {
    type: types.QUESTION_VOTE,
    payload
  };
}

export function questionVoteSucess(payload) {
  return {
    type: types.QUESTION_VOTE_SUCCESS,
    payload
  };
}

export function questionVoteError(payload) {
  return {
    type: types.QUESTION_VOTE_ERROR,
    payload
  };
}
