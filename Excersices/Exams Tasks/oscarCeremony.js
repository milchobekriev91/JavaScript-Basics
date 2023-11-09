function oscarCeremony(input) {
    let rent = Number(input);

    let oscars = rent - 0.3 * rent;
    let caterring = oscars - 0.15 * oscars;
    let audio = 0.5 * caterring;

    let totalExpence = rent + oscars + caterring + audio;

console.log(totalExpence.toFixed(2));   
}

oscarCeremony(5555);