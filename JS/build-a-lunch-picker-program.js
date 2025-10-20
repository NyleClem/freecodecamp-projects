let lunches = [];
let addLunchToEnd = (endArr, say) => {
  endArr.push(say);
  console.log(`${say} added to the end of the lunch menu.`);
  return endArr;
};
let addLunchToStart = (beginArr, say) => {
  beginArr.unshift(say);
  console.log(`${say} added to the start of the lunch menu.`);
  return beginArr;
};
let removeLastLunch = (popArr) => {
  let item = popArr.pop();
  if (item != null) {
    console.log(`${item} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return popArr;
};

let removeFirstLunch = (shiftArr) => {
  let first = shiftArr.shift();
  if (first != null) {
    console.log(`${first} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return shiftArr;
};

let getRandomLunch = (ranArr) => {
  let wow = Math.floor(Math.random() * ranArr.length);
  let rraann = ranArr[wow];
  if (rraann != null) {
    console.log(`Randomly selected lunch: ${rraann}`);
  } else {
    console.log("No lunches available.");
  }
};
let showLunchMenu = (showArr) => {
  if (showArr.length != 0) {
    if (showArr.length == 3) {
      console.log(`Menu items: ${showArr[0]}, ${showArr[1]}, ${showArr[2]}`);
    } else if (showArr.length == 4) {
      console.log(
        `Menu items: ${showArr[0]}, ${showArr[1]}, ${showArr[2]}, ${showArr[3]}`
      );
    }
  } else {
    console.log("The menu is empty.");
  }
};
