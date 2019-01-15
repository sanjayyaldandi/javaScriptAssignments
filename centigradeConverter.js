let fahrenheitTemp = +process.argv[2];

let centigradeTemp = (fahrenheitTemp - 32) * (5 / 9);

console.log(centigradeTemp);
