function basketballEquipment(input) {

let annualTax = Number(input[0]);

let snickersPrice = annualTax - annualTax  * 0.4;
let outfitPrice = snickersPrice - snickersPrice * 0.2;
let ballPrice =  1 / 4 * outfitPrice;
let accessoriesPrice = 1 / 5 * ballPrice;

let totalTax = annualTax + snickersPrice + outfitPrice + ballPrice + accessoriesPrice;

console.log(`${totalTax}`);
}
basketballEquipment(['365']);