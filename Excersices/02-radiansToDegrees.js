function radiansToDegree(input) {
    let radians = Number(input[0]);
    let celsius = radians * (180 / Math.PI);
    console.log(celsius);
}

radiansToDegree(['3.1416']);