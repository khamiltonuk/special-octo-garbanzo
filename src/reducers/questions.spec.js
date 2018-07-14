import questions from "./questions";
//import * as types from '../../constants/ActionTypes'

describe.skip("Question reducer", () => {
  test("should return initial state", () => {
    expect(questions(undefined, {})).toEqual([]);
  });
});
