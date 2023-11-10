function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistsCnt = Number(input[1]);
    let statistDress = Number(input[2]);

    let decor = 0.1 * budget;
    let statistsExp = statistsCnt * statistDress;
   
    if (statistsCnt > 150) {
        statistsExp *= 0.9;
    }
    let totalExpense = decor + statistsExp;
    if (budget >= totalExpense) {
        let moneyLeft = budget - totalExpense;
        console.log('Action!');
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalExpense - budget;
        console.log('Not enough money!');
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["9587.88",

"222",

"55.68"]);