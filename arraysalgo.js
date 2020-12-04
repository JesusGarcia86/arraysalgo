var testArr = [6,3,5,1,2,4];

var sum=0;
for(let i=0; i<testArr.length; i++){
    sum+=testArr[i];
    console.log('val:', testArr[i], 'sum:', sum);
}

num 6, sum 6,
num 3, sum 9,
num 5, sum 14,
num 1, sum 15,
num 2, sum 17,
num 4, sum 21,

var testArr = [6,3,5,1,2,4];

for(let i=0; i<testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);

[0, 3, 10, 3, 8, 20]