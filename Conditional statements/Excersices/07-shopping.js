function shopping (input) {
    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let videPrice = videoCard * 250;
    let cpuPrice = videPrice * 0.35;
    let ramPrice = videPrice * 0.10;
    totalExpense = videPrice + cpu * cpuPrice + ram * ramPrice;

    if (videoCard > cpu) {
        totalExpense *= 0.85;
    }

    if (budget >= totalExpense) {
        let moneyLeft = budget - totalExpense;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalExpense - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}

shopping(["920.45",

"3",

"1",

"1"]);