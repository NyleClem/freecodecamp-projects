let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
let lookUpProfile = (name, property) => {
  let phoneNumber;
  let info;
  let firstName1;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      phoneNumber = contacts[i].number;
      info = contacts[i][property];
      firstName1 = contacts[i].firstName;
    }
  }
  if (firstName1 == undefined) {
    console.log("No such contact");
    return "No such contact";
  } else if (info == undefined) {
    console.log("No such property");
    return "No such property";
  }
  console.log(phoneNumber);
  console.log(info);
  return info;
};

lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry", "likes");
lookUpProfile("Bob", "number");
