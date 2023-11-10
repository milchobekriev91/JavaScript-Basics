function lunchBreak(input) {
    let movieName = input[0];
    let episodeLenght = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = (1 / 8) * breakTime;
    let restTime = (1 / 4) * breakTime;
    let timeLeft = breakTime - lunchTime - restTime;

    if (timeLeft >= episodeLenght) {
        let freeTime = timeLeft - episodeLenght;
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(freeTime)} minutes free time.`);
    } else {
        let neededTime = episodeLenght - timeLeft;
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(neededTime)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",

    "48",

    "60"]);