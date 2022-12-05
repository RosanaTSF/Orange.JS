class turbiCar {
    model;
    collor;
    mileage;

    constructor(model, collor, mileage) {
    this.model;
    this.collor;
    this.mileage = mileage;
}

calculate(route, price) {
    return route * this.mileage * price;
    }
}

const beetle = new turbiCar('new beetle', 'light pink', 1/13);
console.log(beetle.calculate(70, 5));
const bmw = new turbiCar('BMW série 3', 'blue', 1/10);
console.log(bmw.calculate(70, 5));
const tesla = new turbiCar('Tesla x', 'golden', 1/15);
console.log(tesla.calculate(75, 5));
const jeep = new turbiCar('Wranger', 'black', 1/18);
console.log(jeep.calculate(80, 10));


