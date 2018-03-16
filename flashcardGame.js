// dependency for inquirer npm package
var inquirer = require("inquirer");
var basicCardGame = require("./basicCardGame.js");
var clozeCardGame = require("./clozeCardGame.js");


function whichFlashCardGame() {

  inquirer.prompt([
    {
      type: "list",
      name: "whichGame",
      message: "Which Flash Card Game do you want to play?",
      choices: ["Basic Flash Card", "Cloze Flash Card Game", "Exit"]
    },

  ]).then(function (user) {

    // If the user guesses the password...
    if (user.whichGame === "Basic Flash Card") {
      //process.stdout.write('\x1B[2J\x1B[0f');
      console.log("==============================================");
      console.log("Have Fun With Basic Flash Card Game!");
      console.log("==============================================");
      //var basicCardGame = require("./basicCardGame.js");
      //console.log(typeof basicCardGame.BasicCardGame);
      basicCardGame.BasicCardGame(whichFlashCardGame);
      //whichFlashCardGame();   
    }
    else if (user.whichGame === "Cloze Flash Card Game") {
      //process.stdout.write('\x1B[2J\x1B[0f');
      console.log("==============================================");
      console.log("Have Fun With Cloze Flash Card Game!");
      console.log("==============================================");
      //var clozeCardGame = require("./clozeCardGame.js");
      //console.log(typeof clozeCardGame.ClozeCardGame);
      clozeCardGame.ClozeCardGame(whichFlashCardGame);
    }
    else if (user.whichGame === "Exit") {
      console.log("==============================================");
      console.log("Thank You For Playing Flash Card Game!");
      console.log("==============================================");
      process.stdout.write("\x1B[2J");
     // console.log('\x1Bc');
      process.exit();
    }
   
  });
}
whichFlashCardGame();

