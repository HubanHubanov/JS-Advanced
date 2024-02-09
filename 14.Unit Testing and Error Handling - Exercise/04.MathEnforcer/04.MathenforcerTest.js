import { mathEnforcer } from "./testFunc.js";

import { expect } from "chai";

describe("Test", function () {
  it("test", function () {
    expect(mathEnforcer.addFive("d")).to.equal(undefined);
  });
  it("test", function () {
    expect(mathEnforcer.addFive([1, 2, 3])).to.equal(undefined);
  });
  it("test", function () {
    expect(mathEnforcer.addFive({ 1: 1, 2: 2 })).to.equal(undefined);
  });
  it("test", function () {
    expect(mathEnforcer.addFive("4")).to.equal(undefined);
  });
  it("test", function () {
    expect(mathEnforcer.addFive(0)).to.equal(5);
  });
  it("test", function () {
    expect(mathEnforcer.addFive(-2)).to.equal(3);
  });
  it("test", function () {
    expect(mathEnforcer.addFive(2.4444)).to.equal(7.4444);
  });
  it("test", function () {
    expect(mathEnforcer.addFive("100")).to.equal(undefined);
  });
  it("test", function () {
    expect(mathEnforcer.subtractTen("d")).to.equal(undefined);
  });

  it("test", function () {
    expect(mathEnforcer.subtractTen("d")).to.equal(undefined);
  });
  it("test", function () {
    expect(mathEnforcer.subtractTen([1, 2, 3])).to.equal(undefined);
  });
  it("test", function () {
    expect(mathEnforcer.subtractTen({ 1: 1, 2: 2 })).to.equal(undefined);
  });
  it("test", function () {
    expect(mathEnforcer.subtractTen("4")).to.equal(undefined);
  });
  it("test", function () {
    expect(mathEnforcer.subtractTen(0)).to.equal(-10);
  });
  it("test", function () {
    expect(mathEnforcer.subtractTen(-2)).to.equal(-12);
  });
  it("test", function () {
    expect(mathEnforcer.subtractTen(2.4444)).to.equal(-7.5556);
  });
  it("test", function () {
    expect(mathEnforcer.subtractTen("100")).to.equal(undefined);
  });

  it("test", function () {
    expect(mathEnforcer.sum("100", 4)).to.equal(undefined);
  });
  it("test", function () {
    expect(mathEnforcer.sum(4, "4")).to.equal(undefined);
  });

  it("test", function () {
    expect(mathEnforcer.sum("100", "4")).to.equal(undefined);
  });

  it("test", function () {
    expect(mathEnforcer.sum([1, 2, 3], 4)).to.equal(undefined);
  });

  it("test", function () {
    expect(mathEnforcer.sum(2, { 1: 1 })).to.equal(undefined);
  });

  it("test", function () {
    expect(mathEnforcer.sum([1, 2, 3], [2, 3])).to.equal(undefined);
  });

  it("test", function () {
    expect(mathEnforcer.sum(3)).to.equal(undefined);
  });

  it("test", function () {
    expect(mathEnforcer.sum(4, 10)).to.equal(14);
  });

  it("test", function () {
    expect(mathEnforcer.sum(-4, 5)).to.equal(1);
  });

  it("test", function () {
    expect(mathEnforcer.sum(0, -100)).to.equal(-100);
  });

  it("test", function () {
    expect(mathEnforcer.sum(2.3, 3.1)).to.equal(5.4);
  });

  it("test", function () {
    expect(mathEnforcer.sum(-1.5, -2.5)).to.equal(-4);
  });

  it("test", function () {
    expect(mathEnforcer.sum(2.55555, 1)).to.equal(3.55555);
  });

  it("test", function () {
    expect(mathEnforcer.sum(-1.001, -1.001)).to.equal(-2.002);
  });
});
