const fuelPrice = 4.54;
const kmPerLiters = 20;
const distanceInKm = 113;

const litersConsumed = distanceInKm / kmPerLiters;
const amountSpent = litersConsumed * fuelPrice;


console.log = (amountSpent.toFixed(2));


