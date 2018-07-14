import { getApiData } from "./sagas";
import { call, put } from "redux-saga/effects";
import { fetchQuestionsError } from "./actions";

import { fetchData } from "./api";

const iterator = getApiData();

// create a fake error
const error = {};

describe("getApiDate", () => {
  it("should yeild a call instruction", () => {
    expect(iterator.next().value).toEqual(call(fetchData));
  });

  it("should throw an error correctly", () => {
    expect(iterator.throw(error).value).toEqual(
      put(fetchQuestionsError(error))
    );
  });
});
