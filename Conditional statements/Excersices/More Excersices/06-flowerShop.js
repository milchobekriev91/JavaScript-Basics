function flowerShop (input) {
let magnoliaCount = Number(input[0]);
let hyacinthCount = Number(input[1]);
let roseCount = Number(input[2]);
let cactusCount = Number(input[3]);
let giftPrice = Number(input[4]);

let totalOrder = magnoliaCount * 3.25 + hyacinthCount * 4 + roseCount * 3.5 + cactusCount * 8;
let tax = 0.05 * totalOrder;
let totalProfit = totalOrder - tax;

if (totalProfit >= giftPrice) {
let moneyLeft = totalProfit - giftPrice;
console.log(`She is left with ${Math.floor(moneyLeft)} leva.`);  
} else {
let moneyNeeded = giftPrice - totalProfit;
console.log(`She will have to borrow ${Math.ceil(moneyNeeded)} leva.`);
}

}