//Function takes an array of arrays as an argument & return an array containing the largest number from each sub-array.
let largestOfAll = (arr) => {
  let newArr = [];
  //outer loop iterates outer array
  for (let i = arr.length - 1; i >= 0; i--) {
    //condition checks the sub array length before proceeding
    if (arr[i].length > 0) {
      let largestValue = -10;
      //inner loop iterates sub array, conditional checks if largest value is less than the value at index j and assigns that value to largesValue if it is
      for (let j = 0; j < arr[i].length; j++) {
        if (largestValue < arr[i][j]) {
          largestValue = arr[i][j];
        }
      }
      //Pushes the largest value from the sub array into a new array
      newArr.unshift(largestValue);
    }
  }
  //console.log(newArr);
  return newArr;
};

//largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
//largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
