import React from "react";
import Questions from "./Questions";
import { shallow } from "enzyme";

const MockQuestion = [
  {
    question: "Favourite programming language?",
    published_at: "2018-05-21T13:58:56.155000+00:00",
    choices: [
      {
        choice: "Objective-C",
        url: "/questions/9088/choices/34294",
        votes: 0
      },
      {
        choice: "Python",
        url: "/questions/9088/choices/34293",
        votes: 0
      },
      {
        choice: "Ruby",
        url: "/questions/9088/choices/34295",
        votes: 0
      },
      {
        choice: "Swift",
        url: "/questions/9088/choices/34292",
        votes: 0
      }
    ],
    url: "/questions/9088"
  },
  {
    question: "Game Genre",
    published_at: "2015-05-27T21:22:26.670000+00:00",
    choices: [
      {
        choice: "Action",
        url: "/questions/10/choices/69",
        votes: 4
      },
      {
        choice: "Action-adventure",
        url: "/questions/10/choices/71",
        votes: 4
      },
      {
        choice: "Shooter",
        url: "/questions/10/choices/70",
        votes: 4
      },
      {
        choice: "Strategy",
        url: "/questions/10/choices/74",
        votes: 4
      },
      {
        choice: "Role-playing",
        url: "/questions/10/choices/72",
        votes: 2
      },
      {
        choice: "Simulation",
        url: "/questions/10/choices/73",
        votes: 1
      },
      {
        choice: "Sports",
        url: "/questions/10/choices/75",
        votes: 0
      }
    ],
    url: "/questions/10"
  }
];

describe("Questions", () => {
  test("Should return a h1 ", () => {
    const wrapper = shallow(<Questions />);
    expect(wrapper.find("h1").exists()).toBe(true);
  });

  test("Should return a h1 with the title Questions", () => {
    const wrapper = shallow(<Questions />);
    expect(wrapper.find("h1").text()).toEqual("Questions");
  });

  test("Should return no items if no props ", () => {
    const wrapper = shallow(<Questions />);
    expect(wrapper.find(".question-list").children().length).toEqual(0);
  });

  test("Should return two list items if given two questions", () => {
    const wrapper = shallow(<Questions questions={MockQuestion} />);
    expect(wrapper.find(".question-list").children().length).toEqual(2);
  });
});
