function timeMinutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    if (minutes >= 0 && minutes < 45) {
        minutes += 15;
        console.log(`${hour}:${minutes}`);
    } else if (minutes >= 45 && minutes < 60) {
        minutes = minutes - 45;
        if (hour >= 0 && hour < 23) {
            hour += 1;
        } else if (hour === 23) {
            hour -= 23;
        }
            if (minutes < 10) {
            console.log(`${hour}:0${minutes}`)
        } else {
            console.log(`${hour}:${minutes}`);
        }
        
    }
}

timeMinutes(['12', '49']);