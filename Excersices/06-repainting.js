function painting(input) {
let nylonQty = Number(input[0]);
let paintQty = Number(input[1]);
let thinner = Number(input[2]);
let workersHours = Number(input[3]);

let extraPaintQty = paintQty * 0.10;
let totalPaintQty = (paintQty + extraPaintQty) * 14.50;

let totalNylonQty = (nylonQty + 2) * 1.50;
let totalThinner = thinner * 5;

let totalMaterialExpence = totalPaintQty + totalNylonQty + totalThinner + 0.40;
let workersPerHour = totalMaterialExpence * 0.30;

let totalWorkExpence = workersPerHour * workersHours;
let totalExpences = totalMaterialExpence + totalWorkExpence;
console.log(`${totalExpences}`);
}

painting(['10', '11', '4', '8']);
