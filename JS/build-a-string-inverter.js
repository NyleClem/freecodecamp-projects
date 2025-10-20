let reverseString = (reverse) => {
  let done = reverse.split("");
  done.reverse();
  reverse = done.join("");
  return reverse;
};
