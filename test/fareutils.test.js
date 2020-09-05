const mocha = require('mocha')
const chai = require('chai')
const fareUtils = require('../fareutils')



// we get expect from chai 
const expect = chai.expect

//chai also has assert 
const assert = require('chai').assert
describe('fareUtils',function(){
    it("expect fare to ne 50 for 0km, 0 min" , ()=>{
        let fare = fareUtils.calFare(0,0);
        expect(fare).to.equal(50);
    })

    it('expect fare to be 100 for 10 km , 0min ',()=>{
        let fare = fareUtils.calFare(10,0);
        expect(fare).to.equal(100)
    })
    it(' should return hello world !' , ()=>{
        let mssg = fareUtils.returnHello();
       // expect(mssg).to.equal("hello ")
       assert.equal(mssg,"hello !")

    })
    it('expect fare to be 56 for 2 km , 18min ',()=>{
        let fare = fareUtils.calFare(2,18);
        expect(fare).to.equal(56)
    })
})