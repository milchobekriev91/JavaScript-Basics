function fishLand(input) {
let mackerelPrice = Number(input[0]);
let sprinklePrice = Number(input[1]);
let bonitoWeight = Number(input[2]);
let scadWeight = Number(input[3]);
let clamWeight = Number(input[4]);

let bonitoPrice = mackerelPrice * 1.6;
let scadPrice = sprinklePrice * 1.8;
let clamPrice = 7.5;

let totalPrice = bonitoWeight * bonitoPrice + scadWeight * scadPrice + clamWeight * clamPrice;

console.log(totalPrice.toFixed(2));  
  
  }