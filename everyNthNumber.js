let firstNum = +process.argv[2];
let lastNum = +process.argv[3];
let incrementation = +process.argv[4];

for(let index=firstNum;index<=lastNum;index+=incrementation){
  console.log(index);
}
