function officeMaterials(input) {
	let penCounter = Number(input[0]);
	let markerCounter = Number(input[1]);
	let cleanerLiters = Number(input[2]);
	let discount = Number(input[3]);

	let totalPrice = (penCounter * 5.80) + (markerCounter * 7.20) + (cleanerLiters * 1.20);
	let discountedTotalPrice = totalPrice - (totalPrice * (discount/100));
	console.log(discountedTotalPrice);
}

officeMaterials(['2', '3', '4', '25']);
