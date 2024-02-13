import { expect } from "chai";
import { findNewApartment } from "./findApartment.js";


describe("test", function(){
    it("test", function() {
      expect( () =>findNewApartment.isGoodLocation([1,2], true)).to.throw("Invalid input!")
    })
    it("test", function() {
        expect(()=> findNewApartment.isGoodLocation(5, true)).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () => findNewApartment.isGoodLocation("Sofia", "true" )).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () => findNewApartment.isGoodLocation("Sofia", "true" )).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () => findNewApartment.isGoodLocation([1,2,3], 5 )).to.throw("Invalid input!")
      })
      it("test", function() {
        expect( () => findNewApartment.isGoodLocation("Sofia", "true" )).to.throw("Invalid input!")
      })
      it("test", function() {
        expect( () => findNewApartment.isGoodLocation()).to.throw("Invalid input!")
      })


      it("test", function() {
        expect(findNewApartment.isGoodLocation("Sofiaa", true )).to.equal("This location is not suitable for you.")
      })

      it("test", function() {
        expect(findNewApartment.isGoodLocation("Gabrovo", true )).to.equal("This location is not suitable for you.")
      })

      it("test", function() {
        expect(findNewApartment.isGoodLocation("Gabrovo", false )).to.equal("This location is not suitable for you.")
      })

      it("test", function() {
        expect(findNewApartment.isGoodLocation("Sofia", false )).to.equal("There is no public transport in area.")
      })

      it("test", function() {
        expect(findNewApartment.isGoodLocation("Sofia", true )).to.equal("You can go on home tour!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isLargeEnough("flat", 100)).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isLargeEnough(6, 100)).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isLargeEnough({}, 100)).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isLargeEnough([], 100)).to.throw("Invalid input!")
      })
      it("test", function() {
        expect( () =>findNewApartment.isLargeEnough([50, 100, 60, 120], "100")).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isLargeEnough([50, 100, 60, 120], [1,2,3])).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isLargeEnough(60, "60")).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isLargeEnough([50, 100, 60, 120])).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( findNewApartment.isLargeEnough([50, 100, 60, 120], 100)).to.equal("100, 120")
      })

      it("test", function() {
        expect( findNewApartment.isLargeEnough([50, 100, 60, 120], 0)).to.equal("50, 100, 60, 120")
      })

      it("test", function() {
        expect( findNewApartment.isLargeEnough([50, 100, 60, 120], 150)).to.equal("")
      })

      it("test", function() {
        expect( () =>findNewApartment.isItAffordable("20", "100")).to.throw("Invalid input!")
      })
      it("test", function() {
        expect( () =>findNewApartment.isItAffordable(20, "100")).to.throw("Invalid input!")
      })
      it("test", function() {
        expect( () =>findNewApartment.isItAffordable("20", 100)).to.throw("Invalid input!")
      })
      it("test", function() {
        expect( () =>findNewApartment.isItAffordable(0, 0)).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isItAffordable(50, 0)).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isItAffordable(0, 50)).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isItAffordable(-20, 50)).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isItAffordable(50, -1)).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isItAffordable(-2, -19)).to.throw("Invalid input!")
      })

      it("test", function() {
        expect( () =>findNewApartment.isItAffordable(0,"50" )).to.throw("Invalid input!")
      })

      it("test", function() {
        expect(findNewApartment.isItAffordable(100,99 )).to.equal("You don't have enough money for this house!")
      })
      it("test", function() {
        expect(findNewApartment.isItAffordable(200,50 )).to.equal("You don't have enough money for this house!")
      })
      it("test", function() {
        expect(findNewApartment.isItAffordable(90, 100)).to.equal("You can afford this home!")
      })
      it("test", function() {
        expect(findNewApartment.isItAffordable(100, 100)).to.equal("You can afford this home!")
      })



}) 