function hello() {
  console.log("Hello world");
}
function sumOfArray(arr) {
  let sum = arr.reduce((a, b) => a + b);
  return sum;
}
function multiplyByTwo(arr){
    let double = arr.map(i => i*2);
    return double;
}

