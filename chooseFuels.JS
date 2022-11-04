const ethanolPrice = 4.15;
const gasolinePrice = 5.50;
const kmPerLiters = 20;
const distanceInKm = 113;
const chooseFuels = 'gasoline';

const litersConsumed = distanceInKm / kmPerLiters;

if (chooseFuels === 'ethanol') {
const amountSpent = litersConsumed * ethanolPrice;
console.log(amountSpent.toFixed(2));
} else {
    const amountSpent = litersConsumed * gasolinePrice;
    console.log(amountSpent.toFixed(2));
}



