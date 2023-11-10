function pets (input) {
let daysCount = Number(input[0]);
let foodQty = Number(input[1]);
let dogFood = Number(input[2]);
let catFood = Number(input[3]);
let turtleFood = Number(input[4]);

let totalFoodConsumed = (dogFood + catFood + turtleFood/1000) * daysCount;

if (foodQty >= totalFoodConsumed) {
let foodLeft = foodQty - totalFoodConsumed;
console.log(`${Math.floor(foodLeft)} kilos of food left.`);
} else {
let foodNeeded = totalFoodConsumed - foodQty;
console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
}

}