console.log("Hi everyone");

// should return r s p or R S P??
const getUserValue = function () {
  const userValue = prompt("Choose Rock, Paper or Scissors");
  return userValue.toLowerCase();
};

// validate input true/false
const validateValue = function (userValue) {
  if (userValue === "r" || userValue === "s" || userValue === "p") {
    return true;
  } else {
    return false;
  }
};

// get computer value r s p
const getComputerValue = function () {
  return;
};

// game logic win lose draw
const getGameResult = function () {
  return;
};

//  calculate and log result
const displayScore = function () {
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
console.log(userValue);