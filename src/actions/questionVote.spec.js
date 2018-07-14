import { questionVoteSucess, questionVote } from "./questionVote";
import * as types from "./../constants/actionTypes";

describe("actions", () => {
  test("should return parameter as payload", () => {
    const payload = "Finish docs";
    const expectedAction = {
      type: types.QUESTION_VOTE_SUCCESS,
      payload
    };
    expect(questionVoteSucess(payload)).toEqual(expectedAction);
  });

  test("should return just the correct type", () => {
    const payload = "vote";
    const expectedAction = {
      type: types.QUESTION_VOTE,
      payload
    };
    expect(questionVote(payload)).toEqual(expectedAction);
  });
});
