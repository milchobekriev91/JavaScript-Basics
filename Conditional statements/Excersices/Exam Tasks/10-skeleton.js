function skeleton(input) {

	let controlMins = Number(input[0]);
    let controlSec = Number(input[1]);
    let distance = Number(input[2]);
    let secondsPer100M = Number(input[3]);
  
    let totalControlSec = controlMins * 60 + controlSec;
    let timeDiscount = distance / 120 * 2.5;
  
    let marinTime = distance / 100 * secondsPer100M - timeDiscount;
  
        if (marinTime <= totalControlSec) {
  		    console.log(`Marin Bangiev won an Olympic quota!`);
            console.log(`His time is ${marinTime.toFixed(3)}.`);
	    } else {
   		    let secondsNeeded = marinTime - totalControlSec;
            console.log(`No, Marin failed! He was ${secondsNeeded.toFixed(3)} second slower.`);
        }
}