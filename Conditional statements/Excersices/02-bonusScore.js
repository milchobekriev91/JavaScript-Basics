function bonusScore(input) {
    let score = Number(input[0]);
    let bonusPoints = 0;
    if (score <= 100) {
        bonusPoints = 5;
    } else if (score > 100 && score <= 1000) {
        bonusPoints = 0.2 * score;
    } else {
        bonusPoints = 0.1 * score;
    }

    if (score % 2 == 0) {
        bonusPoints = bonusPoints + 1;
    } else if (score % 5 == 0 && score % 2 == 1) {
        bonusPoints = bonusPoints + 2;
    }
    let totalScore = score + bonusPoints;
    console.log(`${bonusPoints} ${totalScore}`);
}
bonusScore(['175']);