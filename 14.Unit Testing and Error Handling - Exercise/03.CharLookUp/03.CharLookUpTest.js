import { lookupChar } from "./testFunc.js";

import { expect } from "chai";

describe("test", function () {
  it("test", function () {
    expect(lookupChar([1, 2, 3], 1)).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar({ 1: 1 }, 1)).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar("ben", "ben")).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar("ben", [1, 2, 3])).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar("ben", { 2: 2 })).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar(2, 1)).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar(2, "1")).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar(2, "ben")).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar([1, 2, 3], [5, 6, 7])).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar(2, "ben")).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar("5", "5")).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar(5, 5)).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar("ben", 100)).to.equal("Incorrect index");
  });

  it("test", function () {
    expect(lookupChar("ben", -1)).to.equal("Incorrect index");
  });

  it("test", function () {
    expect(lookupChar("ben", 3)).to.equal("Incorrect index");
  });

  it("test", function () {
    expect(lookupChar("baba", 1)).to.equal("a");
  });

  it("test", function () {
    expect(lookupChar("Ben", 0)).to.equal("B");
  });

  it("test", function () {
    expect(lookupChar("Ben", 2)).to.equal("n");
  });

  it("test", function () {
    expect(lookupChar("5", 0)).to.equal("5");
  });

  it("test", function () {
    expect(lookupChar("5", 1)).to.equal("Incorrect index");
  });

  it("test", function () {
    expect(lookupChar("ben")).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar(5)).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar(0)).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar("ben", 1.5)).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar("ben", 2 / 3)).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar("ben", 0.2)).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar(5, 0.2)).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar(5, 0.2)).to.equal(undefined);
  });

  it("test", function () {
    expect(lookupChar(0, 0)).to.equal(undefined);
  });
});
