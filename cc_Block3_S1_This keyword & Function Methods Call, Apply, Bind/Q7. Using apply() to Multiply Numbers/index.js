function multiplyNumbers(num1, num2) {
  const product = (function(a, b) {
    return a * b;
  }).apply(null, [num1, num2]);
  
  return product;
}

const result = multiplyNumbers(5, 7);
console.log(result);