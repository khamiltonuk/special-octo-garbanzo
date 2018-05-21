import React from "react";
import { QuestionDetails, calculatePercentages } from "./QuestionDetails";
import { shallow } from "enzyme";

const MockQuestion = {
  published_at: "2015-05-27T21:22:26.648000+00:00",
  question: "hello mum",
  url: "/hello",
  choices: [
    {
      choice: "Apple Cider",
      url: "/questions/9/choices/67",
      votes: 2
    }
  ]
};

describe("QuestionDetails", () => {
  test("Should return a h1 ", () => {
    const wrapper = shallow(<QuestionDetails questionDetail={MockQuestion} />);

    expect(wrapper.find("h1").exists()).toBe(true);
  });

  test("Should return a h1 with the title Question Details", () => {
    const wrapper = shallow(<QuestionDetails questionDetail={MockQuestion} />);
    expect(wrapper.find("h1").text()).toEqual("Questions Details");
  });
});

describe("calculatePercentages", () => {
  test("should calulate the percentage of given array", () => {
    const arr = [18, 200, 124, 98];
    const calculate = calculatePercentages(arr);
    const result = [4, 45, 28, 22];
    expect(calculatePercentages(arr)).toEqual(result);
  });
});
