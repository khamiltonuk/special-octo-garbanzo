import { getApiData, getQuestionDetails } from "./sagas";
import { call, put } from "redux-saga/effects";
import {
  fetchQuestionsError,
  fetchQuestionsSucess,
  fetchQuestionDetailsSuccess,
  fetchQuestionDetailsError
} from "./actions";

import { fetchData, fetchQuestionDetails } from "./api";

const action = {
  id: "uid/4"
};

const getApiDataIterator = getApiData();
const getQuestionDetailsIterator = getQuestionDetails(action);

// create a fake error
const error = {};

// create a fake payload
const payload = "payload";

describe("getApiData", () => {
  it("should yeild a call instruction and call action after", () => {
    expect(getApiDataIterator.next().value).toEqual(call(fetchData));
    expect(getApiDataIterator.next(payload).value).toEqual(
      put(fetchQuestionsSucess(payload))
    );
  });

  it("should throw an error correctly", () => {
    expect(getApiDataIterator.throw(error).value).toEqual(
      put(fetchQuestionsError(error))
    );
  });
});

describe("getQuestionDetails", () => {
  it("should call endpoint and fire action after", () => {
    expect(getQuestionDetailsIterator.next().value).toEqual(
      call(fetchQuestionDetails, "uid/4")
    );
    expect(getQuestionDetailsIterator.next(payload).value).toEqual(
      put(fetchQuestionDetailsSuccess(payload))
    );
  });

  it("should throw correct error", () => {
    expect(getQuestionDetailsIterator.throw(error).value).toEqual(
      put(fetchQuestionDetailsError(error))
    );
  });
});
