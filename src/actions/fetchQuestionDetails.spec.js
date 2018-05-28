import { fetchQuestionDetails } from "./fetchQuestionDetails";
import * as types from "./../constants/actionTypes";

describe("fetchQuestionDetails", () => {
  test("should return FETCH_QUESTION_DETAILS action type", () => {
    const id = 5;
    const expectedAction = {
      type: types.FETCH_QUESTION_DETAILS,
      id
    };

    expect(fetchQuestionDetails(id)).toEqual(expectedAction);
  });
});
