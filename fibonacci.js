let givenNum = +process.argv[2];

let previousNum = 0;
let currentNum = 1;
let sum = 0;

for(let index=0;index<givenNum;index++){
  sum = previousNum + currentNum;
  console.log(previousNum);
  previousNum = currentNum;
  currentNum = sum;
}
