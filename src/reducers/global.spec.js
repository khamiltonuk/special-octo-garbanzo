import global from "./global";
import * as types from "./../constants/actionTypes";

describe("Global reducer", () => {
  test("should return initial state", () => {
    expect(global(undefined, {})).toEqual({ error: false, loading: true });
  });

  test("should return a loading state of false is fetching questions is successful", () => {
    expect(
      global(undefined, {
        type: types.FETCH_QUESTIONS_SUCCESS,
        payload: [{}]
      })
    ).toEqual({ error: false, loading: false });
  });

  test("should return a loading state of false is fetching question details is successful", () => {
    expect(
      global(undefined, {
        type: types.FETCH_QUESTION_DETAILS_SUCCESS,
        payload: [{}]
      })
    ).toEqual({ error: false, loading: false });
  });

  test("should return a loading state of false and error state of true is fetching question details returns an error", () => {
    expect(
      global(undefined, {
        type: types.FETCH_QUESTION_DETAILS_ERROR,
        payload: [{}]
      })
    ).toEqual({ error: true, loading: false });
  });

  test("should return a loading state of false and error state of true is fetching questions returns an error", () => {
    expect(
      global(undefined, {
        type: types.FETCH_QUESTIONS_ERROR,
        payload: [{}]
      })
    ).toEqual({ error: true, loading: false });
  });
});
