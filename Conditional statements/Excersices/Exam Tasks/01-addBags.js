function addBags(input) {
	let lugageOver20 = Number(input[0]);
  let lugageWeight = Number(input[1]);
  let daysLeft = Number(input[2]);
  let lugageCount = Number(input[3]);
  let lugageCost = 0.0;
  	if (lugageWeight < 10) {
    	lugageCost = lugageOver20 * 0.2;
      if (daysLeft < 7) {
      		lugageCost *= 1.40;
        	let totalLugageCost = lugageCost * lugageCount;
        	console.log(`The total price of bags is: ${totalLugageCost.toFixed(2)} lv.`);
      } else if (daysLeft <= 30) {
      		lugageCost *= 1.15;
        	let totalLugageCost = lugageCost * lugageCount;
        	console.log(`The total price of bags is: ${totalLugageCost.toFixed(2)} lv.`);
      } else {
      		lugageCost *= 1.10;
          let totalLugageCost = lugageCost * lugageCount;
        	console.log(`The total price of bags is: ${totalLugageCost.toFixed(2)} lv.`);
      }
    } else if (lugageWeight <= 20) {
    	lugageCost = lugageOver20 * 0.5;
     		if (daysLeft < 7) {
      		lugageCost *= 1.40;
        	let totalLugageCost = lugageCost * lugageCount;
        	console.log(`The total price of bags is: ${totalLugageCost.toFixed(2)} lv.`);
      } else if (daysLeft <= 30) {
      		lugageCost *= 1.15;
        	let totalLugageCost = lugageCost * lugageCount;
        	console.log(`The total price of bags is: ${totalLugageCost.toFixed(2)} lv.`);
      } else {
      		lugageCost *= 1.10;
          let totalLugageCost = lugageCost * lugageCount;
        	console.log(`The total price of bags is: ${totalLugageCost.toFixed(2)} lv.`);
      }
    } else {
    	lugageCost = lugageOver20;
     		if (daysLeft < 7) {
      		lugageCost *= 1.40;
        	let totalLugageCost = lugageCost * lugageCount;
        	console.log(`The total price of bags is: ${totalLugageCost.toFixed(2)} lv.`);
      } else if (daysLeft <= 30) {
      		lugageCost *= 1.15;
        	let totalLugageCost = lugageCost * lugageCount;
        	console.log(`The total price of bags is: ${totalLugageCost.toFixed(2)} lv.`);
      } else {
      		lugageCost *= 1.10;
          let totalLugageCost = lugageCost * lugageCount;
        	console.log(`The total price of bags is: ${totalLugageCost.toFixed(2)} lv.`);
      }
    }
}