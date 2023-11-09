function circle(input) {
	let radius = Number(input);
  let perimeter = 2 * Math.PI * radius;
  let area = Math.PI * radius * radius;
  
  console.log(`${area.toFixed(2)}`);
  console.log(`${perimeter.toFixed(2)}`);
}

circle(5);