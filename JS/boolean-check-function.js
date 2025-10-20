let booWho = (param) => {
  if (param === true || param === false) {
    return true;
  } else {
    return false;
  }
};
//check
console.log(booWho(5));
