
rate = {
    fixed: 50,
    minKm: 5,
    perKm: 10,
    freeMin: 15,
    perMin: 2
}

function calFare(km, min) {
    let fare = rate.fixed;

    fare += (km > this.rate.minKm) ? ((km - this.rate.minKm) * this.rate.perKm) : 0
    fare += (min > rate.freeMin) ? ((min - this.rate.freeMin) * this.rate.perMin) : 0;
    return fare;
}

function returnHello(){
    return "hello !";
}

exports = module.exports = {
    rate, calFare, returnHello
}