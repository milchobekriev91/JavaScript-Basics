function catWalking(input) {
	
    let walkDuration = Number(input[0]);
  let walkCount = Number(input[1]);
  let caloriesPerDay = Number(input[2]);
  let totalWalkPerDay = walkDuration * walkCount;
  let totalCaloriesBurn = totalWalkPerDay * 5;
  
  if (totalCaloriesBurn < (0.5 * caloriesPerDay)) {
          console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurn}.`);
  } else {
          console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurn}.`);
  }
}  