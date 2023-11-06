function agencyProfit(input) {
let airline = input[0];
  let adultTicketQty = Number(input[1]);
  let childrenTicketQty = Number(input[2]);
  let adultTicketPrice = Number(input[3]);
  let serviceTax = Number(input[4]);
  
  
  let totalAdultPrice = adultTicketPrice + serviceTax;
  let totalAdultIncome = totalAdultPrice * adultTicketQty;
  let childrenTicketPrice = adultTicketPrice - (adultTicketPrice * 0.7) + serviceTax;
  let totalChildrenIncome = childrenTicketQty * childrenTicketPrice;
  let totalAirlineProfit = (totalAdultIncome + totalChildrenIncome) * 0.2;

 
  console.log(`The profit of your agency from ${airline} tickets is ${totalAirlineProfit.toFixed(2)} lv.`);
  
}

agencyProfit(['WizzAir', '15', '5', '120', '40']);