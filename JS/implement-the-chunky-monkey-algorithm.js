let chunkArrayInGroups = (arr, num) => {
  let twoD = [];
  let test = [...arr];

  for (let i = 0; i < arr.length - 1; i += num) {
    let newArr = arr.slice(i, i + num);
    let counter = num;
    twoD.push(newArr);

    while (counter > 0) {
      test.shift();
      counter -= 1;
    }
  }
  if (test.length > 0) {
    twoD.push(test);
  }

  //console.log(test);
  //console.log(twoD);
  return twoD;
};

//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
