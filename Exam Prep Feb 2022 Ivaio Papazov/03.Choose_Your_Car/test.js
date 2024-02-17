import { chooseYourCar } from "./solution.js";
import { expect } from "chai";

describe("test", function () {
  //first case
  it("works", function () {
       expect( () => chooseYourCar.choosingType("Sedan", "red", 1899)).to.throw("Invalid Year!")
  });
  it("works", function () {
    expect( () => chooseYourCar.choosingType("Sedan", "red", 1899)).to.throw("Invalid Year!")
});

  









 

})