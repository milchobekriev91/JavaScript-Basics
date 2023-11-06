function poolDay(input) {
    let peopleCount = Number(input[0]);
    let entranceFee = Number(input[1]);
    let loungerPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let peopleEntranceFee = peopleCount * entranceFee;
    let loungerQty = peopleCount * 0.75;
    let umbrellaQty = peopleCount / 2;

    let totalLoungerCost = Math.round(loungerQty) * loungerPrice;
    let totalUmbrellaCost = Math.round(umbrellaQty) * umbrellaPrice;
    let totalCost = peopleEntranceFee + totalLoungerCost + totalUmbrellaCost;


    console.log(totalCost.toFixed(2) + ' lv.');

}

poolDay(['100', '8', '6', '4']);    