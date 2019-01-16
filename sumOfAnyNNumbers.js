let firstNum = +process.argv[2];
let lastNum = +process.argv[3];

let sum = 0;

for(let index=firstNum;index<=lastNum;index++){
  sum += index;
}

console.log(sum);
