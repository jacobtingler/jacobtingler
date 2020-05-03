let maxWrong = 6;
let wrong = 0;
let answer = "";
let guessed = [];
let wordStatus = null;
const keys = document.getElementById("keyboard").innerHTML;

var programming_languages = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby",
];

function genWord() {
  answer =
    programming_languages[
      Math.floor(Math.random() * programming_languages.length)
    ];
  console.log(answer);
}

function displayWord() {
  word = document.getElementById("word");
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  word.innerHTML = wordStatus;
}

function guess(letter) {
  guessed.indexOf(letter) === -1 ? guessed.push(letter) : null;
  document.getElementById(letter).setAttribute("disabled", true);

  if (answer.indexOf(letter) >= 0) {
    checkWord();
    checkWin();
  } else if (answer.indexOf(letter) === -1) {
    wrong++;
    updateMistakes();
    checkLose();
    updatePic();
  }
}

function checkWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("word").innerHTML = wordStatus;
}

function checkWin() {
  if (wordStatus === answer) {
    document.getElementById("keyboard").innerHTML = "You WIN !!!";
  }
}

function checkLose() {
  if (wrong === maxWrong) {
    document.getElementById("keyboard").innerHTML = "You Lose !!!";
  }
}

function updateMistakes() {
  document.getElementById("wrong").innerHTML = wrong;
}

function updatePic() {
  document.getElementById("pic").src = "./images/" + wrong + ".jpg";
}

function reset() {
  document.getElementById("pic").src = "./images/0.jpg";
  wrong = 0;
  guessed = [];

  genWord();
  displayWord();
  updateMistakes();
  document.getElementById("keyboard").innerHTML = keys;
}

genWord();
displayWord();
