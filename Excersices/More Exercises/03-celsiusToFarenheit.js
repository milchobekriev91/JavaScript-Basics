function celsiusToFarenheit (input) { 
    let celsius = Number(input[0]);
    let farenheit = 9 / 5 * celsius + 32;

    console.log(farenheit.toFixed(2));
}

celsiusToFarenheit(['0']);