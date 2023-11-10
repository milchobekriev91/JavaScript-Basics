function fuelTank (input) {
		
    let fuelType = input[0];
    let fuelQty = Number(input[1]);
    let cardHolder = input[2];
    let totalCost = 0.0;
    
    let gasCardPrice = 0.93 - 0.08;
    let gasolineCardPrice = 2.22 - 0.18;
    let dieselCardPrice = 2.33 - 0.12;
    
    if (cardHolder === "Yes") {
    	if (fuelQty < 20) {
      	if (fuelType === "Gasoline") {
        		totalCost = fuelQty * gasolineCardPrice;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Diesel") {
        		totalCost = fuelQty * dieselCardPrice;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Gas") {
        		totalCost = fuelQty * gasCardPrice;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        }
      } else if (fuelQty <= 25) {
      		if (fuelType === "Gasoline") {
        		totalCost = fuelQty * gasolineCardPrice * 0.92;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Diesel") {
        		totalCost = fuelQty * dieselCardPrice * 0.92;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Gas") {
        		totalCost = fuelQty * gasCardPrice * 0.92;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } 
      } else {
      		if (fuelType === "Gasoline") {
        		totalCost = fuelQty * gasolineCardPrice * 0.9;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Diesel") {
        		totalCost = fuelQty * dieselCardPrice * 0.9;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Gas") {
        		totalCost = fuelQty * gasCardPrice * 0.9;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } 
      } 
    } else {
    		if (fuelQty < 20) {
      	if (fuelType === "Gasoline") {
        		totalCost = fuelQty * 2.22;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Diesel") {
        		totalCost = fuelQty * 2.33;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Gas") {
        		totalCost = fuelQty * 0.93;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        }
      } else if (fuelQty <= 25) {
      		if (fuelType === "Gasoline") {
        		totalCost = fuelQty * 2.22 * 0.92;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Diesel") {
        		totalCost = fuelQty * 2.33 * 0.92;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Gas") {
        		totalCost = fuelQty * 0.93 * 0.92;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } 
      } else {
      		if (fuelType === "Gasoline") {
        		totalCost = fuelQty * 2.22 * 0.9;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Diesel") {
        		totalCost = fuelQty * 2.33 * 0.9;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } else if (fuelType === "Gas") {
        		totalCost = fuelQty * 0.93 * 0.9;
           	console.log(`${totalCost. toFixed(2)} lv.`);
        } 
      } 
    }		
}