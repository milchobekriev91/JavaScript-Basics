function easterBakery(input) {
    let flourPrice = Number(input[0]);
    let flourQty = Number(input[1]);
    let sugarQty = Number(input[2]);
    let eggBoxes = Number(input[3]);
    let yeastQty = Number(input[4]);

    let flourSum = flourPrice * flourQty;

    let sugarPrice = flourPrice - 0.25 * flourPrice;
    let sugarSum = sugarQty * sugarPrice;

    let eggPrice = 1.10 * flourPrice;
    let eggSum = eggBoxes * eggPrice;

    let yeastPrice = sugarPrice - 0.8 * sugarPrice;
    let yeastSum = yeastPrice * yeastQty;

    let totalSum = flourSum + sugarSum + eggSum + yeastSum;

    console.log(totalSum.toFixed(2));
}

easterBakery(['63.44', '3.57', '6.35', '8', '2']);