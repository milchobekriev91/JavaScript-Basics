function easterParty(input) {
    let guestCount = Number(input[0]);
    let couponPrice = Number(input[1]);
    let budget = Number(input[2]);

    let cakePrice = 0.10 * budget;
    let totalExpence = 0.0

    if (guestCount >= 10 && guestCount <= 15) {
        couponPrice *= 0.85;    
    } else if (guestCount > 15 && guestCount <= 20) {
        couponPrice *= 0.8;
    } else if (guestCount > 20){
        couponPrice *= 0.75;
    }
        totalExpence = guestCount * couponPrice + cakePrice;
    if (budget >= totalExpence) {
        let moneyLeft = budget - totalExpence;
        console.log(`It is party time! ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalExpence - budget;
        console.log(`No party! ${moneyNeeded.toFixed(2)} leva needed.`);
    }
}

easterParty(['18', '30', '450']);  