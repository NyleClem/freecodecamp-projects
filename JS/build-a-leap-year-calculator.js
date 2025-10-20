let isLeapYear = (year) => {
  let x;
  if (year % 4 == 0) {
    if (year % 100 != 0) {
      x = `${year} is a leap year.`;
    } else if (year % 100 == 0 && year % 400 == 0) {
      x = `${year} is a leap year.`;
    } else {
      x = `${year} is not a leap year.`;
    }
  } else {
    x = `${year} is not a leap year.`;
  }
  return x;
};
let year = 2000;
let result = isLeapYear(year);

console.log(result);

year = 2001;
