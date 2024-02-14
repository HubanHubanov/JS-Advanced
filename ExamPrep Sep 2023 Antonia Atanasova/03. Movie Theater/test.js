import { movieTheater } from "./03. Movie Theater.js";
import { expect } from "chai";

describe("test", function () {
  it("works", function () {
    expect(movieTheater.ageRestrictions("G")).to.equal(
      `All ages admitted to watch the movie`
    );
  });
  it("works", function () {
    expect(movieTheater.ageRestrictions("PG")).to.equal(
      `Parental guidance suggested! Some material may not be suitable for pre-teenagers`
    );
  });
  it("works", function () {
    expect(movieTheater.ageRestrictions("R")).to.equal(
      `Restricted! Under 17 requires accompanying parent or adult guardian`
    );
  });
  it("works", function () {
    expect(movieTheater.ageRestrictions("NC-17")).to.equal(
      `No one under 17 admitted to watch the movie`
    );
  });
  it("works", function () {
    expect(movieTheater.ageRestrictions()).to.equal(
      `There are no age restrictions for this movie`
    );
  });
  it("works", function () {
    expect(movieTheater.ageRestrictions("DMDX")).to.equal(
      `There are no age restrictions for this movie`
    );
  });
  ////////////////////////////////////

  it("works", function () {
    expect(
      movieTheater.moneySpent(
        5,
        ["nachos", "popcorn", "food"],
        ["soda", "water"]
      )
    ).to.equal(
      "The total cost for the purchase with applied discount is 60.00"
    );
  });
  it("works", function () {
    expect(
      movieTheater.moneySpent(
        1,
        ["nachos", "popcorn", "food"],
        ["soda", "water"]
      )
    ).to.equal("The total cost for the purchase is 15.00");
  });

  it("works", function () {
    expect(
      movieTheater.moneySpent(
        1,
        ["nachos", "popcorn", "food"],
        ["soda", "water"]
      )
    ).to.equal("The total cost for the purchase is 15.00");
  });
  it("works", function () {
    expect(
      movieTheater.moneySpent(
        1,
        ["nachos", "popcorn", "food"],
        ["soda", "water"]
      )
    ).to.equal("The total cost for the purchase is 15.00");
  });

  it("works", function () {
    expect(movieTheater.moneySpent(5, [], [])).to.equal(
      "The total cost for the purchase with applied discount is 60.00"
    );
  });

  it("works", function () {
    expect(() =>
      movieTheater.moneySpent(
        "5",
        ["nachos", "popcorn", "food"],
        ["soda", "water"]
      )
    ).to.throw("Invalid input");
  });

  it("works", function () {
    expect(() =>
      movieTheater.moneySpent(
        [5, 6],
        ["nachos", "popcorn", "food"],
        ["soda", "water"]
      )
    ).to.throw("Invalid input");
  });

  it("works", function () {
    expect(() => movieTheater.moneySpent(5, 6, ["soda", "water"])).to.throw(
      "Invalid input"
    );
  });

  it("works", function () {
    expect(() =>
      movieTheater.moneySpent(5, "john"[("soda", "water")])
    ).to.throw("Invalid input");
  });

  it("works", function () {
    expect(() => movieTheater.moneySpent(5, ["soda", "water"], "3")).to.throw(
      "Invalid input"
    );
  });

  it("works", function () {
    expect(() =>
      movieTheater.moneySpent(5, ["soda", "water"], { 1: 1 })
    ).to.throw("Invalid input");
  });

  it("works", function () {
    expect(() => movieTheater.moneySpent(5, 6, { 1: 1 })).to.throw(
      "Invalid input"
    );
  });
  it("works", function () {
    expect(() => movieTheater.moneySpent(5, 6, 7)).to.throw("Invalid input");
  });

  it("works", function () {
    expect(() => movieTheater.moneySpent([1, 2], "str", { 1: 1 })).to.throw(
      "Invalid input"
    );
  });
  //////////////////////

  it("works", function () {
    expect(() => movieTheater.reservation({ 1: 1 }, 5)).to.throw(
      "Invalid input"
    );
  });
  it("works", function () {
    expect(() => movieTheater.reservation("6", 5)).to.throw("Invalid input");
  });
  it("works", function () {
    expect(() => movieTheater.reservation([1, 2, 3], "5")).to.throw(
      "Invalid input"
    );
  });
  it("works", function () {
    expect(() => movieTheater.reservation({ 1: 1 }, [1, 2, 3])).to.throw(
      "Invalid input"
    );
  });
  it("works", function () {
    expect(() => movieTheater.reservation(6, [1, 2, 3])).to.throw(
      "Invalid input"
    );
  });
  it("works", function () {
    expect(() => movieTheater.reservation("str", "str")).to.throw(
      "Invalid input"
    );
  });
  it("works", function () {
    expect(
      movieTheater.reservation(
        [
          { rowNumber: 1, freeSeats: 7 },
          { rowNumber: 2, freeSeats: 5 },
        ],
        3
      )
    ).to.equal(2);
  });
});
