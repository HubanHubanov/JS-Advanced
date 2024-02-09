import { isOddOrEven } from "./testFunc.js";

import { expect } from "chai";

describe("tes", function () {
  it("test", function () {
    expect(isOddOrEven(5)).to.equal(undefined);
  });

  it("test", function () {
    expect(isOddOrEven([1, 2, 3, 4])).to.equal(undefined);
  });

  it("test", function () {
    expect(isOddOrEven({ 1: 1 })).to.equal(undefined);
  });

  it("test", function () {
    expect(isOddOrEven()).to.equal(undefined);
  });

  it("test", function () {
    expect(isOddOrEven("baba")).to.equal("even");
  });

  it("test", function () {
    expect(isOddOrEven("bob")).to.equal("odd");
  });

  it("test", function () {
    expect(isOddOrEven("Ben")).to.equal("odd");
    expect(isOddOrEven("abaab")).to.equal("odd");
    expect(isOddOrEven("adrtnots")).to.equal("even");
    expect(isOddOrEven("a")).to.equal("odd");
    expect(isOddOrEven("ha")).to.equal("even");
  });
});
