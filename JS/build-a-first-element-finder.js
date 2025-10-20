//Truth test function that looks through an array and returns the first element that passes a test function
let findElement = (arr, func) => {
  let x;
  //iterates through the array and test each element using the provided test function and sets x equal to the first element where the test function returns true.
  for (let i = 0; i < arr.length; i++) {
    x = func(arr[i]);
    if (x === true) {
      x = arr[i];
      break;
    } else {
      x = undefined;
    }
  }
  //console.log(x);
  return x;
};
//TESTS
//findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
//findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
//findElement([1, 2, 3, 4], function(num) { return num > 2; });
//findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; });
//findElement(["cat", "dog", "bird"], function(str) { return str.length > 10; });
//findElement([2, 4, 6, 8], function(num) { return num % 2 === 0; });
//findElement([], function(num) { return num > 0; });
