let limit = +process.argv[2];
let sum = 0;

for(let index=1;index<=limit;index++){
  sum += index;
}

console.log(sum);
