let num1 = +process.argv[2];
let num2 = +process.argv[3];
let num3 = +process.argv[4];

let greatestNum = num1;

if(num2>greatestNum){
  greatestNum = num2;
}

if(num3>greatestNum){
  greatestNum = num3;
}

console.log(greatestNum);
