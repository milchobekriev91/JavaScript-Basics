function easterLunch(input) {
let cakeQty = Number(input[0]);
let eggBoxQty = Number(input[1]);
let cookiesQty = Number(input[2]);

let cakePrice = cakeQty * 3.20;
let eggPrice = eggBoxQty * 4.35;
let cookiesPrice = cookiesQty * 5.40;
let eggPaintPrice = eggBoxQty * 12 * 0.15;

let totalExpense = cakePrice + eggPrice + cookiesPrice + eggPaintPrice;

console.log(totalExpense.toFixed(2));

}