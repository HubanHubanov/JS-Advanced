import { isSymmetric } from "./test2.js";
import { expect } from "chai";

describe("Testin function", function () {
  it("check", function () {
    expect(isSymmetric([1, 2, 1])).to.equal(true);
  });

  it("check", function () {
    expect(isSymmetric(["a", "b", "a"])).to.equal(true);
  });

  it("check", function () {
    expect(isSymmetric(["a", "b", "a", "c"])).to.equal(false);
  });

  it("check", function () {
    expect(isSymmetric("string")).to.equal(false);
  });

  it("check", function () {
    expect(isSymmetric([1, 2, 1, 5])).to.equal(false);
  });

  it("check", function () {
    expect(isSymmetric({ 1: 1, 1: 1 })).to.equal(false);
  });

  it("check", function () {
    expect(isSymmetric([])).to.equal(true);
  });

  it("check", function () {
    expect(isSymmetric(["ababa"])).to.equal(true);
  });

  it("check", function () {
    expect(isSymmetric([0])).to.equal(true);
  });

  it("check", function () {
    expect(isSymmetric()).to.equal(false);
  });

  it("check", function () {
    expect(isSymmetric([1, 2, "1"])).to.equal(false);
  });


});
