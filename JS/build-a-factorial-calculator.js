let num = 20;
let factorialCalculator = (number1) => {
  let result = 1;
  for (let i = number1; i > 0; i--) {
    result *= i;
  }
  return result;
};

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
