function transportPrice (input) {
let kilometers = Number(input[0]);
let partOfDay = input[1];


let taxiDay  = kilometers * 0.79 + 0.7;
let taxiNight = kilometers * 0.9 + 0.7;
let bus = 0.09 * kilometers;
let train = kilometers * 0.06;

if (kilometers < 20 && partOfDay === 'day'){
    console.log(taxiDay.toFixed(2));
} else if (kilometers < 20 && partOfDay === "night"){
    console.log(taxiNight.toFixed(2));
} else if (kilometers < 100) {
    console.log(bus.toFixed(2));
} else {
    console.log(train.toFixed(2));
}

}