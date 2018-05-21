import global from "./global";
import * as types from "./../constants/actionTypes";

describe("Global reducer", () => {
  test("should return initial state", () => {
    expect(global(undefined, {})).toEqual({ error: false, loading: true });
  });

  test("should return initial state", () => {
    expect(
      global([], {
        type: types.FETCH_QUESTIONS_SUCCESS,
        payload: [{}]
      })
    ).toEqual({ error: false, loading: true });
  });
});
