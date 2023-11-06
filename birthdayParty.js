function birthdayParty(input) {
    let rent = Number(input);
  
    let cake = rent * 0.2;
    let drinks = cake - (0.45 * cake);
    let animator = (1 / 3) * rent;
    let totalBudget = rent + cake + drinks + animator;
  
    console.log(totalBudget.toFixed(2));
  }

  birthdayParty(365);