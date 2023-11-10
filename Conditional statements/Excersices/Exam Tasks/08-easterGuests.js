function easterGuests(input) {
    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);

    let easterCakeCount = Math.ceil(guestsCount / 3);
    let eggCount = guestsCount * 2;
    let easterCakeSum = easterCakeCount * 4;
    let eggSum = eggCount * 0.45;
    let totalExpence = easterCakeSum + eggSum;
    if (budget >= totalExpence) {
        let moneyLeft = budget - totalExpence;
        console.log(`Lyubo bought ${easterCakeCount} Easter bread and ${eggCount} eggs.`);
        console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
    } else {
        let moneyNeeded = totalExpence - budget;
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${moneyNeeded.toFixed(2)} lv. more.`);
    }
}

easterGuests(['9', '12']);