function foodDelivery(input) {
let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let vegMenu = Number(input[2]);

let chickenMenuPrice = chickenMenu * 10.35;
let fishMenuPrice = fishMenu * 12.40;
let vegMenuPrice = vegMenu * 8.15;

let fullMenuPrice = chickenMenuPrice + fishMenuPrice + vegMenuPrice;
let desertPrice = 0.2 * fullMenuPrice;

let totalPrice = fullMenuPrice + desertPrice + 2.50;

console.log(`${totalPrice}`);
	}
foodDelivery(['2', '4', '3']);