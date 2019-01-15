let num1 = +process.argv[2];
let num2 = +process.argv[3];

let limit = Math.max(num1,num2);
let gcd = 1;

for(let index=1;index<=limit;index++){
  if(num1%index==0 && num2%index==0){
    gcd = index;
  }
}

console.log(gcd);
