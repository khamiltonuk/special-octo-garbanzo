import { calculatePercentages } from "./QuestionDetails";

describe("calculatePercentages", () => {
  test("should calulate the percentage of given array", () => {
    const arr = [18, 200, 124, 98];
    const calculate = calculatePercentages(arr);
    const result = [9, 100, 62, 49];
    expect(calculatePercentages(arr)).toEqual(result);
  });
});
