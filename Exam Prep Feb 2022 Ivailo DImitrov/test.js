import { library } from "./testResource.js";
import { expect } from "chai";

describe("test", function () {
  //first case
  it("works", function () {
    expect(() => library.calcPriceOfBook(10, 2020)).to.throw("Invalid input");
  });
  it("works", function () {
    expect(() => library.calcPriceOfBook(["book"], 2020)).to.throw(
      "Invalid input"
    );
  });
  it("works", function () {
    expect(() => library.calcPriceOfBook({ 1: 1 }, 2020)).to.throw(
      "Invalid input"
    );
  });
  it("works", function () {
    expect(() => library.calcPriceOfBook("name", 20.2)).to.throw(
      "Invalid input"
    );
  });
  it("works", function () {
    expect(() => library.calcPriceOfBook("name", "200")).to.throw(
      "Invalid input"
    );
  });
  it("works", function () {
    expect(() => library.calcPriceOfBook("name", [20])).to.throw(
      "Invalid input"
    );
  });
  it("works", function () {
    expect(() => library.calcPriceOfBook(10, [20])).to.throw("Invalid input");
  });
  it("works", function () {
    expect(() => library.calcPriceOfBook([], "2020")).to.throw("Invalid input");
  });
  it("works", function () {
    expect(() => library.calcPriceOfBook(["book"], 202.3)).to.throw(
      "Invalid input"
    );
  });
  //happy path
  it("works", function () {
    expect(library.calcPriceOfBook("book", 2022)).to.equal(
      `Price of book is 20.00`
    );
  });
  it("works", function () {
    expect(library.calcPriceOfBook("Great", 1980)).to.equal(
      `Price of Great is 10.00`
    );
  });

  it("works", function () {
    expect(library.calcPriceOfBook("Great", 1500)).to.equal(
      `Price of Great is 10.00`
    );
  });
  //second case
  it("works", function () {
    expect(() => library.findBook([], "Troy")).to.throw(
      "No books currently available"
    );
  });

  it("works", function () {
    expect(
      library.findBook(["Troy", "Life Style", "Torronto"], "Troy")
    ).to.equal("We found the book you want.");
  });

  it("works", function () {
    expect(
      library.findBook(["Troy", "Life Style", "Torronto"], "Troya")
    ).to.equal("The book you are looking for is not here!");
  });
  //third case

  it("works", function () {
    expect(() => library.arrangeTheBooks(-3)).to.throw("Invalid input");
  });
  it("works", function () {
    expect(() => library.arrangeTheBooks(2.1)).to.throw("Invalid input");
  });
  it("works", function () {
    expect(() => library.arrangeTheBooks(-0.9)).to.throw("Invalid input");
  });
  it("works", function () {
    expect(() => library.arrangeTheBooks(5.5)).to.throw("Invalid input");
  });
  it("works", function () {
    expect(library.arrangeTheBooks(50)).to.equal(
      "Insufficient space, more shelves need to be purchased."
    );
  });
  it("works", function () {
    expect(library.arrangeTheBooks(41)).to.equal(
      "Insufficient space, more shelves need to be purchased."
    );
  });
  it("works", function () {
    expect(library.arrangeTheBooks(40)).to.equal(
      "Great job, the books are arranged."
    );
  });
  it("works", function () {
    expect(library.arrangeTheBooks(30)).to.equal(
      "Great job, the books are arranged."
    );
  });

})