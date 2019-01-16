let num = +process.argv[2];
let answer = 1;

for(let index=1;index<=num;index++){
  answer = answer*index;
}

console.log(answer);
