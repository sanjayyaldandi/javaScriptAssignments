let firstNum = +process.argv[2];
let lastNum = +process.argv[3];

let sum = 0;

if(firstNum%2 != 0){
  firstNum += 1;
}

for(let index=firstNum;index<=lastNum;index+=2){
  sum += index;
}

console.log(sum);
