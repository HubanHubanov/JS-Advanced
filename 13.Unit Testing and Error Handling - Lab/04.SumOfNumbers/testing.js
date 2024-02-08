import { expect } from "chai";
import { sum } from "./04.SumOfNumbers.js";

describe("Test function sum", function () {
  it("should sum the numbers in arr", function () {
    expect(sum([1, 2, 3]), "Sum is wrong").to.equal(6);
  });

  it("should return 0 if we pass empty arr", function () {
    expect(sum([]), "Sum is wrong").to.equal(0);
  });

  it("should return NaN if we pass string params", function () {
    expect(isNaN(sum(["John", 2])), "Sum is wrong").to.equal(true);
  });

});

// it ("works", function() {
//     expect(Array.isArray([1,2,3])).to.equal(true)
// })