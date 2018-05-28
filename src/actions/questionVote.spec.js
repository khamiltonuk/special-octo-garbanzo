import { questionVoteSucess, questionVote } from "./questionVote";
import * as types from "./../constants/actionTypes";

describe("actions", () => {
  test("should return parameter as payload", () => {
    const payload = "Finish docs";
    const expectedAction = {
      type: types.FETCH_QUESTIONS_SUCCESS,
      payload
    };
    expect(questionVoteSucess(payload)).toEqual(expectedAction);
  });

  test("should return just the correct type", () => {
    const expectedAction = {
      type: types.FETCH_QUESTIONS
    };
    expect(questionVote()).toEqual(expectedAction);
  });
});
