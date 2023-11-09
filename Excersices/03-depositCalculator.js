function deposit(input) {
	let depositeAmount = Number(input[0]);
	let depositePeriod = Number(input[1]);
	let annualInterestRate = Number(input[2]/100);
	
	let totalAmount = depositeAmount + depositePeriod*((depositeAmount * annualInterestRate)/12);
	console.log(totalAmount);
}
deposit(['200', '3', '5.7']);