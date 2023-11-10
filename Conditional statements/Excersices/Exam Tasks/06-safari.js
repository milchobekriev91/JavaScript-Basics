function safari(input) {
    let = budget = Number(input[0]);
    let fuelNeeded = Number(input[1]);
    let day = input[2];

    let allFuelSum = fuelNeeded * 2.10;
    let driverCost = 100;
     let moneyLeft

    if (day === "Saturday") {
        let totalCosts = (allFuelSum + driverCost) * 0.9;
        if (totalCosts <= budget) {
            let moneyLeft = budget - totalCosts;
            console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);
        } else {
            let moneyNeeded = totalCosts - budget;
            console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`);
        }
        
    } else if (day === "Sunday"){
        let totalCosts = (allFuelSum + driverCost) * 0.8;
        if (totalCosts <= budget) {
            let moneyLeft = budget - totalCosts;
            console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);
        } else {
            let moneyNeeded = totalCosts - budget;
            console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`);
        } 
    }
}

safari(['120', '30', 'Saturday']);