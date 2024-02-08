import {expect} from "chai"
import {add} from "./test2.js"

describe("Test", function() {
    it ("works", function() {
        
    })

    // if(add(1,1) !==2) {
    //     throw new Error(" 1 + 1, must be 2")
    // }

    expect(add(1,2), "wrong adding").to.equal(2)

    
})