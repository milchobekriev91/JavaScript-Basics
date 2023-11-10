function sleepyTomCat (input) {
    let daysOff = Number(input[0]);

    let workDays = 365 - daysOff;
    let playTime = workDays * 63 + daysOff * 127;
    if (playTime <= 30000) {
        let difference = 30000 - playTime;
        let diffhours = Math.floor(difference / 60);
        let diffMins = difference % 60;
        console.log('Tom sleeps well');
        console.log(`${diffhours} hours and ${diffMins} minutes less for play`);
    } else {
        let difference = playTime - 30000;
        let diffHours = Math.floor(difference / 60);
        let diffMins = difference % 60;
        console.log('Tom will run away');
        console.log(`${diffHours} hours and ${diffMins} minutes more for play`);
    }

}

sleepyTomCat(['113']);