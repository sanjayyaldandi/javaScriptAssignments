let limit = +process.argv[2];
let product = 1;

for(let index=1;index<=limit;index++){
  product = product * index;
}

console.log(product);
