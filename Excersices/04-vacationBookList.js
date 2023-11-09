function books(input) {
	let pagesCount = Number(input[0]);
	let pagesPerHour = Number(input[1]);
	let dayCount = Number(input[2]);
	let totalHours = (pagesCount / pagesPerHour)/dayCount;

	console.log(totalHours);
}

books(['212', '5', '10']);