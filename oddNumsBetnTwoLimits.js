let firstNum = +process.argv[2];
let lastNum = +process.argv[3];

if(firstNum%2==0){
  firstNum = firstNum + 1;
}

for(let index=firstNum;index<=lastNum;index+=2){
  console.log(index);
}
