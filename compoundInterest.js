let principle = +process.argv[2];
let time = +process.argv[3];
let rate = +process.argv[4];

let answer = Math.pow((1+(rate/100)),time);

let compoundInterest = (principle*answer)-principle;

console.log(compoundInterest);
