function mountainRun(input) {
    let currentReccord = Number(input[0]);
let distance = Number(input[1]);
let timePerMeter = Number(input[2]);

let delay = Math.floor(distance / 50) * 30;
let totalClimbTime = distance * timePerMeter + delay;

if (totalClimbTime < currentReccord) {
   console.log(`Yes! The new record is ${totalClimbTime.toFixed(2)} seconds.`);
} else if (totalClimbTime >= currentReccord) {
            let difference = totalClimbTime - currentReccord;
         console.log(`No! He was ${difference.toFixed(2)} seconds slower.`); 
}

}