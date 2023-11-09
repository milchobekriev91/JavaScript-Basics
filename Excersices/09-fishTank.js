function fishTank(input) {

let lenght = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let percent = Number(input[3]);

let volumeCm = lenght * width * height;
let volumeDm = volumeCm / 1000;

let usableSpace = volumeDm - volumeDm * (percent/100);

console.log(`${usableSpace}`);
	}
fishTank(['85', '75', '47', '17']);