console.log("Hi everyone");

// should return r s p or R S P??
const getUserValue = function () {
  const userValue = prompt("Choose Rock, Paper or Scissors");
  return userValue.toLowerCase();
};

// validate input true/false
const validateValue = function (userValue) {
  return userValue === "r" || userValue === "s" || userValue === "p";
};

// get computer value r s p
const getComputerValue = function () {
  const validValues = ["r", "s", "p"];
  // randomly generating numbers
  const randomIndex = Math.floor(Math.random() * validValues.length);
  const randomValue = validValues[randomIndex];
  return randomValue;
};

// game logic win lose draw
const getGameResult = function () {
  return;
};

//  calculate and log result
const displayScore = function (gameResult) {
  if (gameResult === "win") {
    playerDetails.wins += 1;
  } else if (gameResult === "lose") {
    playerDetails.loses += 1;
  } else {
    playerDetails.draws += 1;
  }

  const message =
    "Wins: " +
    playerDetails.wins +
    " | Loses: " +
    playerDetails.loses +
    " | Draws: " +
    playerDetails.draws;

  alert(message);
  return;
};

const playerDetails = {
  wins: 0,
  draws: 0,
  loses: 0,
};

let inProgress = true;

// get user value
const userValue = getUserValue();

// validating value
const isValid = validateValue(userValue);
console.log(isValid);

// taking valid values.
if (isValid) {
  // get computer Value
  const computerValue = getComputerValue();
  console.log(userValue, computerValue);
  displayScore();
} else {
  alert("This is not a valid answer, try again");
}
