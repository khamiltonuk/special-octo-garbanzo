import * as types from "../constants/actionTypes";
import { fetchQuestionsSucess, fetchQuestions } from "./fetchQuestion";

describe("actions", () => {
  test("should return parameter as payload", () => {
    const payload = "Finish docs";
    const expectedAction = {
      type: types.FETCH_QUESTIONS_SUCCESS,
      payload
    };
    expect(fetchQuestionsSucess(payload)).toEqual(expectedAction);
  });

  test("should return just the correct type", () => {
    const expectedAction = {
      type: types.FETCH_QUESTIONS
    };
    expect(fetchQuestions()).toEqual(expectedAction);
  });
});
