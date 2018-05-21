import * as actions from "./actions";
import * as types from "./../constants/actionTypes";

describe("actions", () => {
  test("should return parameter as payload", () => {
    const payload = "Finish docs";
    const expectedAction = {
      type: types.FETCH_QUESTIONS_SUCCESS,
      payload
    };
    expect(actions.fetchQuestionsSucess(payload)).toEqual(expectedAction);
  });

  test("should return just the correct type", () => {
    const expectedAction = {
      type: types.FETCH_QUESTIONS
    };
    expect(actions.fetchQuestions()).toEqual(expectedAction);
  });

  describe("fetchQuestionDetails", () => {
    test("should return FETCH_QUESTION_DETAILS action type", () => {
      const id = 5;
      const expectedAction = {
        type: types.FETCH_QUESTION_DETAILS,
        id
      };

      expect(actions.fetchQuestionDetails(id)).toEqual(expectedAction);
    });
  });
});
