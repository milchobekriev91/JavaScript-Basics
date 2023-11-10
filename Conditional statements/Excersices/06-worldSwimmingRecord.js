function worldSwimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let delay = Math.floor(distance / 15)* 12.5;
    let totalSeconds = distance * secondsPerMeter + delay;
    
    if (totalSeconds < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalSeconds.toFixed(2)} seconds.`);
    } else {
        let difference = totalSeconds - recordSeconds;
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"]);