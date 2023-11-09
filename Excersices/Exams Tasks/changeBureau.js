function changeBureau(input) {
let bitcoin = Number(input[0]);
let chineseYuan = Number(input[1]);
let commission = Number(input[2]);

let yuanToLev = (chineseYuan * 0.15) * 1.76;
let totalSumLeva = bitcoin * 1168 + yuanToLev;
let totalSumEuros = totalSumLeva / 1.95;
let commissionSum = totalSumEuros * (commission / 100);

let totalEuros = totalSumEuros - commissionSum;

console.log(totalEuros.toFixed(2));
}

changeBureau(['1', '5', '5']);