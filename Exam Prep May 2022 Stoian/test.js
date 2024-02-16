import { companyAdministration } from "./companyAdministration.js";
import { expect } from "chai";

describe("tets", function () {
  it("works", function () {
    let c = companyAdministration;
    expect(() => c.hiringEmployee("Ben", "IT", 4)).to.throw(
      `We are not looking for workers for this position.`
    );
  });

  it("works", function () {
    let c = companyAdministration;
    expect(c.hiringEmployee("Ben", "Programmer", 3)).to.equal(
      `Ben was successfully hired for the position Programmer.`
    );
  });

  it("works", function () {
    let c = companyAdministration;
    expect(c.hiringEmployee("Ben", "Programmer", 2)).to.equal(
      `Ben is not approved for this position.`
    );
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.calculateSalary(-1)).to.throw("Invalid hours");
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.calculateSalary("10")).to.throw("Invalid hours");
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.calculateSalary([1, 2, 3, 4])).to.throw("Invalid hours");
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.calculateSalary({ 1: 1 })).to.throw("Invalid hours");
  });

  it("works", function () {
    let c = companyAdministration;
    expect(c.calculateSalary(100)).to.equal(1500);
  });
  it("works", function () {
    let c = companyAdministration;
    expect(c.calculateSalary(161)).to.equal(3415);
  });

  it("works", function () {
    let c = companyAdministration;
    expect(c.calculateSalary(0)).to.equal(0);
  });

  it("works", function () {
    let c = companyAdministration;
    expect(c.calculateSalary(0)).to.equal(0);
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.firedEmployee("Ben", 2)).to.throw("Invalid input");
  });
  it("works", function () {
    let c = companyAdministration;
    expect(() => c.firedEmployee(3, 2)).to.throw("Invalid input");
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.firedEmployee({}, 2)).to.throw("Invalid input");
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.firedEmployee(["Ben", "Peter", "Sam"], "2")).to.throw(
      "Invalid input"
    );
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.firedEmployee(["Ben", "Peter", "Sam"], [1, 2])).to.throw(
      "Invalid input"
    );
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.firedEmployee(["Ben", "Peter", "Sam"], { 1: 1 })).to.throw(
      "Invalid input"
    );
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.firedEmployee(["Ben", "Peter", "Sam"], 1.5)).to.throw(
      "Invalid input"
    );
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.firedEmployee(["Ben", "Peter", "Sam"], -1)).to.throw(
      "Invalid input"
    );
  });

  it("works", function () {
    let c = companyAdministration;
    expect(() => c.firedEmployee(["Ben", "Peter", "Sam"], 3)).to.throw(
      "Invalid input"
    );
  });

  it("works", function () {
    let c = companyAdministration;
    expect(c.firedEmployee(["Ben", "Peter", "Sam"], 1)).to.equal("Ben, Sam");
  });
});
