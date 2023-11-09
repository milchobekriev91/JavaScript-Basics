function trapezoidArea(input) {
let fundament = Number(input[0]);
let thighs = Number(input[1]);
let	height = Number(input[2]);

let area = (fundament + thighs)  * height / 2;

console.log(area.toFixed(2));
}

trapezoidArea(['8', '13', '7']);