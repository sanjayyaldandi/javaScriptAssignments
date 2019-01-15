let principle = +process.argv[2];
let time = +process.argv[3];
let rate = +process.argv[4];

let simpleInterest = (principle*time*rate)/100;

console.log(simpleInterest);
