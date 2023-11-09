function movieProfit(input){

	let movie = input[0];
  let period = Number(input[1]);
  let ticketQty = Number(input[2]);
  let ticketPrice = Number(input[3]);
  let cinemaTax = Number(input[4]);
  
  let profitPerDay = ticketQty * ticketPrice;
  let totalIncome = profitPerDay * period;
  let taxes = totalIncome * cinemaTax / 100;
  let totalProfit = totalIncome - taxes;
  
  console.log(`The profit from the movie ${movie} is ${totalProfit.toFixed(2)} lv.`);

}

movieProfit(['The Programmer', '20', '500', '7.5', '7']);