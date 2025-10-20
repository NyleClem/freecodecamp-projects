let repeatStringNumTimes = (string, number) => {
  let test = string;
  if (number > 0) {
    for (let i = number; i > 1; i--) {
      string += test;
    }
  } else {
    console.log("");
    return "";
  }
  console.log(string);
  return string;
};
repeatStringNumTimes("*");
