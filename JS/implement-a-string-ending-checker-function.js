let confirmEnding = (check, against) => {
  let x;
  let end = check.length - against.length;
  if (check.includes(against) && check.slice(end, check.length) == against) {
    x = true;
  } else {
    x = false;
  }
  return x;
};
