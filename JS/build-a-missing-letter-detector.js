let fearNotLetter = (letters) => {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  letters.toLowerCase;
  let missing;
  let alphaDex = alpha.indexOf(letters.charAt(0));
  let endAlphaDex = alpha.indexOf(letters.charAt(letters.length - 1));
  let newStr = alpha.slice(alphaDex, endAlphaDex);

  for (let i = 0; i < letters.length; i++) {
    if (letters[i + 1] == newStr[i + 1]) {
    } else if (letters[i + 1] !== newStr[i + 1]) {
      missing = newStr[i + 1];
      break;
    }
  }

  console.log(`missing letter: ${missing}`);
  return missing;
};

//fearNotLetter("abcdefghjklmno");
//fearNotLetter("abce")
//fearNotLetter("abcdefghijklmnopqrstuvwxyz")
fearNotLetter("stvwx");
