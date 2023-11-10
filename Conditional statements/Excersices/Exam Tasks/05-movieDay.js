function movieDay(input) {
    let filmingTime = Number(input[0]);
let scenesCount = Number(input[1]);
let sceneTime = Number(input[2]);
let preparation = 0.15 * filmingTime;
let totalFilmingTime = preparation + scenesCount * sceneTime;

if (totalFilmingTime <= filmingTime) {
    let timeLeft = filmingTime - totalFilmingTime;
  console.log(`You managed to finish the movie on time! You have ${Math.round(timeLeft)} minutes left!`);
} else {
    let timeNeeded = totalFilmingTime - filmingTime;
  console.log(`Time is up! To complete the movie you need ${Math.round(timeNeeded)} minutes.`);
}
}