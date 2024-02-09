import { createCalculator } from "./test2.js";
import { expect } from "chai";

describe("Test", function () {
  it("Works", function () {
    let obj = createCalculator();
    obj.add(2);

    expect(obj.get()).to.equal(2);
  });

  it("Works", function () {
    let obj = createCalculator();
    obj.subtract(2);

    expect(obj.get()).to.equal(-2);
  });

  it("Works", function () {
    let obj = createCalculator();

    expect(obj.get()).to.equal(0);
  });

  it("Works", function () {
    let obj = createCalculator();
    obj.add("string");

    expect(isNaN(obj.get())).to.equal(true);
  });

  it("Works", function () {
    let obj = createCalculator();
    obj.add("string");

    expect(typeof obj).to.equal("object");
  });

  it("Works", function () {
    let obj = createCalculator();
    obj.add(2);
    obj.subtract("string");

    expect(isNaN(obj.get())).to.equal(true);
  });

  it("Works", function () {
    let obj = createCalculator();
    obj.add([1, 2, 3]);

    expect(isNaN(obj.get())).to.equal(true);
  });

  it("Works", function () {
    let obj = createCalculator();
    obj.add(5);
    obj.add("5");

    expect(obj.get()).to.equal(10);
  });
});
