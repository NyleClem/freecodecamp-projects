let questions = [
  {
    category: "",
    question: "What is the capital of France?1",
    choices: ["", "", ""],
    answer: "",
  },
  {
    category: "",
    question: "What is the capital of France?2",
    choices: ["", "", ""],
    answer: "",
  },
  {
    category: "",
    question: "What is the capital of France?3",
    choices: ["", "", ""],
    answer: "",
  },
  {
    category: "",
    question: "What is the capital of France?4",
    choices: ["", "", ""],
    answer: "",
  },
  {
    category: "",
    question: "What is the capital of France?5",
    choices: ["", "", ""],
    answer: "",
  },
];

let getRandomQuestion = (arr) => {
  let randomIndex = Math.round(Math.random() * 5);
  let random = arr[randomIndex];
  console.log(arr[randomIndex]);
  return random;
};
let getRandomComputerChoice = (choiceArr) => {
  let randomIndex = Math.round(Math.random() * 4);
  let answer = choiceArr[randomIndex];
  return answer;
};

let getResults = (questionObj, compsChoice) => {
  let correct = questionObj?.answer;
  if (compsChoice == questionObj?.answer) {
    return "The computer's choice is correct";
  } else {
    return "The computer's choice is wrong. The correct answer is: ${correct}";
  }
};

getRandomQuestion(questions);
