function fuelTank (input) {
	
    let fuelType = input[0];
    let fuelLeft = Number(input[1]);
    
    if (fuelLeft < 25) {
    	if (fuelType === "Diesel") {
      	console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
      } else if (fuelType === "Gasoline") {
      	console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
      } else if (fuelType === "Gas") {
      	console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
      } else {
      	console.log(`Invalid fuel!`)
      } 
      
      } else {
      	if (fuelType === "Diesel") {
      	console.log(`You have enough ${fuelType.toLowerCase()}.`);
      } else if (fuelType === "Gasoline") {
      	console.log(`You have enough ${fuelType.toLowerCase()}.`);
      } else if (fuelType === "Gas") {
      	console.log(`You have enough ${fuelType.toLowerCase()}.`);
      } else {
      	console.log(`Invalid fuel!`)
      }
    }
  
  }