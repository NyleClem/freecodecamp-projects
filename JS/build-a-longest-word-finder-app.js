let findLongestWordLength = (sentence) => {
  let arr = sentence.split(" ");
  let longest = "";
  for (let word of arr) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest.length;
};

findLongestWordLength("The quick brown fox jumped over the lazy dog");
