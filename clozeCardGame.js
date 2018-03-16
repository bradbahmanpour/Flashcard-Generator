// dependency for inquirer npm package
var inquirer = require("inquirer");
var ClozeCard = require("./clozeCard.js");

var ClozeCardGame = function(callback) {
  

var questions = [];
var answers = [];
var partial = [];

var DeclareIndependence = new ClozeCard("Thomas Jefferson wrote the Declaration of Independence.", "Thomas Jefferson");
questions.push(DeclareIndependence.text);
answers.push(DeclareIndependence.cloze);
partial.push(DeclareIndependence.partial);

var Washington = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
questions.push(Washington.text);
answers.push(Washington.cloze);
partial.push(Washington.partial);

var ExecBranch = new ClozeCard("The President is in charge of the executive branch.", "The President");
questions.push(ExecBranch.text);
answers.push(ExecBranch.cloze);
partial.push(ExecBranch.partial);

var Commander = new ClozeCard("The President is the Commander-In-Chief of the military.", "The President");
questions.push(Commander.text);
answers.push(Commander.cloze);
partial.push(Commander.partial);

var President = new ClozeCard("Franklin Roosevelt was President during the Great Depression and World War II.", "Franklin Roosevelt");
questions.push(President.text);
answers.push(President.cloze);
partial.push(President.partial);

var Obama = new ClozeCard("Obama was the first African American President.", "Obama");
questions.push(Obama.text);
answers.push(Obama.cloze);
partial.push(Obama.partial);

var Constitution = new ClozeCard("The Constitution is the supreme law of the land.", "The Constitution");
questions.push(Constitution.text);
answers.push(Constitution.cloze);
partial.push(Constitution.partial);

var AbrahamLincoln = new ClozeCard("Abraham Lincoln freed the slaves.", "Abraham Lincoln");
questions.push(AbrahamLincoln.text);
answers.push(AbrahamLincoln.cloze);
partial.push(AbrahamLincoln.partial);

var Responsibility = new ClozeCard("Voting is one responsibility that is only for U.S. citizens.","Voting");
questions.push(Responsibility.text);
answers.push(Responsibility.cloze);
partial.push(Responsibility.partial);

var Vote = new ClozeCard("November is the month what we vote for President.", "November");
questions.push(Vote.text);
answers.push(Vote.cloze);
partial.push(Vote.partial);


//console.log(questions);
//console.log(answers);

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.

var index = 0;

console.log("United States History Test Cloze Cards");
console.log("Let's Play!\n");

function askUser() {

  console.log(partial[index]);

  inquirer.prompt([
    {
      name: "Answer",
      message: "Write Your Answer =>"
    }
  ]).then(function (userAnswers) {
    console.log("The correct Answer is = " + answers[index]);
    console.log(questions[index] + "\n");

    ++index;  // increase index
    if (index < 10) {
      askUser();
    }else {
      callback();
    }
  });
}

askUser();

}

module.exports = {
  
  ClozeCardGame:ClozeCardGame

}

