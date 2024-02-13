describe("Test", function() {
    it("works", function() {
        expect(motorcycleRider.licenseRestriction("AM")).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
    })
    it("works", function() {
        expect(motorcycleRider.licenseRestriction("A1")).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
    })

    it("works", function() {
        expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
    })
    it("works", function() {
        expect(motorcycleRider.licenseRestriction("A")).to.equal("No motorcycle restrictions, and the minimum age is 24.")
    })
    it("works", function() {
        expect( () => motorcycleRider.licenseRestriction("AM2")).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect( () => motorcycleRider.licenseRestriction()).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect( () => motorcycleRider.licenseRestriction(5)).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom()).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom(5,100)).to.throw("Invalid Information!")
    })
    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom({1:1},100)).to.throw("Invalid Information!")
    })
    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom("str",100)).to.throw("Invalid Information!")
    })
    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom(["100","200", "300"], "100")).to.throw("Invalid Information!")
    })
    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom(["100","200", "300"], [1,2,3])).to.throw("Invalid Information!")
    })
    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom(4, "5")).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom([], 200)).to.throw("Invalid Information!")
    })

    
    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom([])).to.throw("Invalid Information!")
    })

    
    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom(["200"], 0)).to.throw("Invalid Information!")
    })

    
    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom([], 200)).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom([], 30)).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom([], -20)).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom(["asc", "fafa"], -20)).to.throw("Invalid Information!")
    })

  

    it("works", function() {
        expect( () => motorcycleRider.motorcycleShowroom(["100","200", "300"], "50")).to.throw("Invalid Information!")
    })

    
    it("works", function() {
        expect( motorcycleRider.motorcycleShowroom(["300","1000", "300", "750"], 400)).to.equal("There are 2 available motorcycles matching your criteria!")
    })

    
    it("works", function() {
        expect( motorcycleRider.motorcycleShowroom(["1000","750", "600"],  500)).to.equal("There are 0 available motorcycles matching your criteria!")
    })
    it("works", function() {
        expect(()=> motorcycleRider.otherSpendings()).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect(()=> motorcycleRider.otherSpendings(["helmet", "jacked"], ["oil filter", "engine oil"],  500)).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect(()=> motorcycleRider.otherSpendings(["helmet", "jacked"], ["oil filter", "engine oil"], )).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect(()=> motorcycleRider.otherSpendings(["helmet", "jacked"], ["oil filter", "engine oil"],  "false")).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect(()=> motorcycleRider.otherSpendings(["helmet", "jacked"], ["oil filter", "engine oil"],  "true")).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect(()=> motorcycleRider.otherSpendings(["helmet", "jacked"], ["oil filter", "engine oil"],  500)).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect(()=> motorcycleRider.otherSpendings(["helmet", "jacked"], "oil filter",  true)).to.throw("Invalid Information!")
    })

    it("works", function() {
        expect(()=> motorcycleRider.otherSpendings({1:1}, ["oil filter", "engine oil"],  false)).to.throw("Invalid Information!")
    })


    it("works", function() {
        expect(()=> motorcycleRider.otherSpendings(["helmet", "jacked"], ["oil filter", "engine oil"],  500)).to.throw("Invalid Information!")
    })


    it("works", function() {
        expect(()=> motorcycleRider.otherSpendings( ["oil filter", "engine oil"],  true)).to.throw("Invalid Information!")
    })


    it("works", function() {
        expect(motorcycleRider.otherSpendings(["helmet",  "jim"], ["filter", "engine oil", "oil"],  false)).to.equal("You spend $270.00 for equipment and consumables!")
    })
    
    

})  