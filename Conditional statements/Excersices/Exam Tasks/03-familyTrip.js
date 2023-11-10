function familyTrip(input) {
    let budget = Number(input[0]);
let nightsCount = Number(input[1]);
let pricePerNight = Number(input[2]);
let addExpences = Number(input[3]);

if (nightsCount > 7) {
        pricePerNight *= 0.95;
}

let totalNightCosts = nightsCount * pricePerNight;
let totalAddExpences = budget * (addExpences / 100);
let totalExpences = totalNightCosts + totalAddExpences;

if (budget >= totalExpences) {
        let moneyLeft = budget - totalExpences;
    console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
} else {
        let moneyNeeded = totalExpences - budget;
    console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
}

}