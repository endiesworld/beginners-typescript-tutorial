import { expect, it } from "vitest";
import { N } from "vitest/dist/reporters-cb94c88b.js";

interface paramsInterface {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: paramsInterface) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
