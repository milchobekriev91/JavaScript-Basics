function housePainting(input) {
let houseWidth = Number(input[0]);
let houseLenght = Number(input[1]);
let roofHeight = Number(input[2]);

let door = 1.2 * 2;
let window = 1.5 * 1.5;
let roofArea = 2 * (houseWidth * roofHeight / 2) + 2 * (houseWidth * houseLenght);
let houseArea = (2 * (houseWidth * houseLenght) + 2 * (houseWidth * houseWidth)) - (door + 2 * window);

let roofPaintQty = roofArea / 4.3;
let housePaintQty = houseArea / 3.4;

console.log(housePaintQty.toFixed(2));
console.log(roofPaintQty.toFixed(2));

}

housePainting(['7', '8', '2.5']);