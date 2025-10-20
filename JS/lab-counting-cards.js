let count = 0;
let cc = (card) => {
  if (card >= 2 && card <= 6) {
    count += 1;
  } else if (card >= 7 && card <= 9) {
    card = card;
  } else if (
    card === 10 ||
    card === "J" ||
    card === "K" ||
    card === "Q" ||
    card === "A"
  ) {
    count -= 1;
  }
  if (count > 0) {
    return `${count} Bet`;
  } else if (count <= 0) {
    return `${count} Hold`;
  }
};
console.log(cc());
