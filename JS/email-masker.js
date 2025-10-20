let maskEmail = (email) => {
  let x = email.indexOf("@");
  let y = email.length;
  let z = x - 1;
  let mask = "*";
  const maskRep = mask.repeat(z - 1);

  let domain = email.slice(x, y);
  email = `${email[0]}${maskRep}${email[x - 1]}${domain}`;
  return email;
};
let email = "user@domain.org";
console.log(maskEmail(email));
