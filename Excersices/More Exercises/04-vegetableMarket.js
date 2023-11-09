function vegetableMarket(input) {
    let vegPrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let vegWeight = Number(input[2]);
    let fruitWeight = Number(input[3]);

    let totalVegPrice = vegPrice * vegWeight;
    let totalFriutPrice = fruitPrice * fruitWeight;

    let totalProfit = (totalFriutPrice + totalVegPrice) / 1.94;
    
    console.log(totalProfit.toFixed(2));
}

vegetableMarket(['0.194', '19.4', '10', '10']);