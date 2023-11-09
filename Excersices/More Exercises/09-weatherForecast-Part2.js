function weatherForecast(input) {
let weatherDegree = Number(input);

if (weatherDegree >= 5 && weatherDegree <= 11.9){
    console.log("Cold");
}
else if (weatherDegree >= 12 && weatherDegree <= 14.9) {
console.log("Cool");
}
else if (weatherDegree >= 15 && weatherDegree <= 20) {
console.log("Mild");
}
else if (weatherDegree >= 20.1 && weatherDegree <= 25.9) {
console.log("Warm");
}
else if (weatherDegree >= 26 && weatherDegree <= 36) {
console.log("Hot");
}
else {
console.log("unknown");	
}
}

weatherForecast(15);