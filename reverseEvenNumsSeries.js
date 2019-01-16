let givenNum = +process.argv[2];

if(givenNum %2 != 0){
  givenNum = givenNum - 1;
}

for(let index=givenNum;index>1;index=index-2){
  console.log(index);
}
