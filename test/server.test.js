const mocha = require('mocha')
const expect = require("chai").expect

const app = require('../server')


//from client side we were using jquery for request 
// here we will use the module request to 

//before running this function we ahve to make sure our server is running 

const request = require('request')
let server;

describe('server', () => {

//call back is asyn fuction so we have to make it sync so we pass done 
    before((done) => {
        server = app.listen(2222, done);
    })


    it("rates should be correct", (done) => {
        request.get("http://localhost:2222/rate", (err, resp, body) => {

            let rates = JSON.parse(body);
            expect(rates.fixed).to.equal(50);
            expect(rates.perKm).to.equal(10);
            done()
        })

    })


    after(() => {
        server.close();
    })
})