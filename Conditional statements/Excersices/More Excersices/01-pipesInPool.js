function pipesInPool (input) {

    let poolVolume = Number(input[0]);
    let pipe1Debit = Number(input[1]);
    let pipe2Debit = Number(input[2]);
    let time = Number(input[3]);

    let totalDbtPipe1 = pipe1Debit * time;
    let totalDbtPipe2 = pipe2Debit * time;
    let filledDebit = totalDbtPipe1 + totalDbtPipe2;

    let totalPercent = filledDebit / poolVolume * 100;
    let percentPipe1 = totalDbtPipe1 / filledDebit * 100;
    let percentPipe2 = totalDbtPipe2 / filledDebit * 100;

    if (filledDebit <= poolVolume) {
        console.log(`The pool is ${totalPercent.toFixed(2)}% full. Pipe 1: ${percentPipe1.toFixed(2)}%. Pipe 2: ${percentPipe2.toFixed(2)}%.`);
    } else {
        let overflowLiters = filledDebit - poolVolume;
        console.log(`For ${time.toFixed(2)} hours the pool overflows with ${overflowLiters.toFixed(2)} liters.`);
    }

}

pipesInPool(['1000', '100', '120', '3']);