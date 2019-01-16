let firstNum = +process.argv[2];
let lastNum = +process.argv[3];

let product = 1;

for(let index=firstNum;index<=lastNum;index++){
  product = product*index;
}

console.log(product);
