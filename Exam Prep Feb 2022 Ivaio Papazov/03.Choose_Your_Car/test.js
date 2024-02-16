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

  it("works", function () {
    expect( () => chooseYourCar.choosingType("Sedannnn", "red", 2020)).to.throw("This type of car is not what you are looking for.")
});


  it("works", function () {
    expect( () => chooseYourCar.choosingType("Sedan", "red", 2023)).to.throw("Invalid Year!")
});

it("works", function () {
    expect( chooseYourCar.choosingType("Sedan", "red", 2010)).to.equal("This red Sedan meets the requirements, that you have.")
});

it("works", function () {
    expect( chooseYourCar.choosingType("Sedan", "red", 2009)).to.equal("This Sedan is too old for you, especially with that red color.")
});
////////////////////////////// second case

  
it("works", function () {
    expect( chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal("BMW, Peugeot")
});

it("works", function () {
    expect( ()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw("Invalid Information!")
});

it("works", function () {
    expect( ()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw("Invalid Information!")
});
it("works", function () {
    expect( ()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], "1")).to.throw("Invalid Information!")
});
it("works", function () {
    expect( ()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], [1])).to.throw("Invalid Information!")
});

it("works", function () {
    expect( ()=>chooseYourCar.brandName( "Peugeot", [1])).to.throw("Invalid Information!")
});
it("works", function () {
    expect( ()=>chooseYourCar.brandName({1:1}, [1])).to.throw("Invalid Information!")
});

it("works", function () {
    expect( ()=>chooseYourCar.brandName(["BMW"], [1])).to.throw("Invalid Information!")
});

it("works", function () {
    expect( ()=>chooseYourCar.brandName([], [1])).to.throw("Invalid Information!")
});

it("works", function () {
    expect( ()=>chooseYourCar.brandName("dca", -2)).to.throw("Invalid Information!")
});
it("works", function () {
    expect( ()=>chooseYourCar.brandName("dca", "2")).to.throw("Invalid Information!")
});
///////////////////////


it("works", function () {
    expect(chooseYourCar.carFuelConsumption(100,6)).to.equal("The car is efficient enough, it burns 6.00 liters/100 km.")
});

it("works", function () {
    expect(chooseYourCar.carFuelConsumption(100,7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.")
});

it("works", function () {
    expect(chooseYourCar.carFuelConsumption(100,8)).to.equal("The car burns too much fuel - 8.00 liters!")
});



it("works", function () {
    expect(()=>chooseYourCar.carFuelConsumption(100,"8")).to.throw("Invalid Information!")
});

it("works", function () {
    expect(()=>chooseYourCar.carFuelConsumption(100,-1)).to.throw("Invalid Information!")
});

it("works", function () {
    expect(()=>chooseYourCar.carFuelConsumption("100",8)).to.throw("Invalid Information!")
});

it("works", function () {
    expect(()=>chooseYourCar.carFuelConsumption(-10,8)).to.throw("Invalid Information!")
});
it("works", function () {
    expect(()=>chooseYourCar.carFuelConsumption(-10, -2)).to.throw("Invalid Information!")
});
it("works", function () {
    expect(()=>chooseYourCar.carFuelConsumption("100", "10")).to.throw("Invalid Information!")
});
it("works", function () {
    expect(()=>chooseYourCar.carFuelConsumption([20], "3")).to.throw("Invalid Information!")
});

it("works", function () {
    expect(()=>chooseYourCar.carFuelConsumption(100)).to.throw("Invalid Information!")
});










 

})