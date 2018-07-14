import { getApiData } from "./sagas";
import { call, put } from "redux-saga/effects";
import { fetchQuestionsError, fetchQuestionsSucess } from "./actions";

import { fetchData } from "./api";

const iterator = getApiData();

// create a fake error
const error = {};

// create a fake payload
const payload = "payload";

describe("getApiData", () => {
  it("should yeild a call instruction and call action after", () => {
    expect(iterator.next().value).toEqual(call(fetchData));
    expect(iterator.next(payload).value).toEqual(
      put(fetchQuestionsSucess(payload))
    );
  });

  it("should throw an error correctly", () => {
    expect(iterator.throw(error).value).toEqual(
      put(fetchQuestionsError(error))
    );
  });
});
