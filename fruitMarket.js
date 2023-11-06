function fruitMarket(input) {

    let strawberryPrc = Number(input[0]);
    let bananasQty = Number(input[1]);
    let orangeQty = Number(input[2]);
    let raspberryQty = Number(input[3]);
    let strawberryQty = Number(input[4]);
  
    let raspberryPrc = strawberryPrc * 0.5;
    let orangePrc = raspberryPrc - 0.4 * raspberryPrc;
    let bananasPrc = raspberryPrc - 0.8 * raspberryPrc;
    
    let totalRaspberryPrc = raspberryQty * raspberryPrc;
    let totalOrangePrc = orangePrc * orangeQty;
    let totalBananasPrc = bananasPrc * bananasQty;
    let totalStrawberryPrc = strawberryPrc * strawberryQty;
  
    let totalSum = totalStrawberryPrc + totalRaspberryPrc + totalOrangePrc + totalBananasPrc;
  
    console.log(`${totalSum.toFixed(2)}`);
  
  }

  fruitMarket(['48', '10', '3.3', '6.5', '1.7']);