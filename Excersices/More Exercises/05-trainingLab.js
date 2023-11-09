function trainingLab(input) {
	let lenght = Number(input[0]) * 100;
  let width = Number(input[1]) * 100;
 	let spotsPerWidth = Math.floor((width - 100) / 70);
  let spotsPerLenght = Math.floor(lenght / 120);
  let totalSpots = spotsPerWidth * spotsPerLenght - 3;
 
  console.log(Math.floor(totalSpots));
}
trainingLab(['12', '8']);