// dependency for inquirer npm package
var inquirer = require("inquirer");
var BasicCard = require("./basicCard.js");



var BasicCardGame = function(callback) {

var questions = [];
var answers = [];

var DeclareIndependence = new BasicCard("Who wrote the Declaration of Independence?", "Thomas Jefferson");
questions.push(DeclareIndependence.front);
answers.push(DeclareIndependence.back);

var Amendment = new BasicCard("What is an amendment?", "An addition or change");
questions.push(Amendment.front);
answers.push(Amendment.back);

var ExecBranch = new BasicCard("Who is in charge of the executive branch?", "The President");
questions.push(ExecBranch.front);
answers.push(ExecBranch.back);

var Commander = new BasicCard("Who is the Commander-In-Chief of the military?", "The President");
questions.push(Commander.front);
answers.push(Commander.back);

var President = new BasicCard("Who was President during the Great Depression and World War II?", "Franklin Roosevelt");
questions.push(President.front);
answers.push(President.back);

var BasicRights = new BasicCard("What does the Constitution do?", "Protects basic rights of Americans");
questions.push(BasicRights.front);
answers.push(BasicRights.back);

var Constitution = new BasicCard("What is the supreme law of the land?", "The Constitution");
questions.push(Constitution.front);
answers.push(Constitution.back);

var AbrahamLincoln = new BasicCard("What is one important thing that Abraham Lincoln did?", "He freed the slaves");
questions.push(AbrahamLincoln.front);
answers.push(AbrahamLincoln.back);

var Responsibility = new BasicCard("What is one responsibility that is only for U.S. citizens?", "Voting");
questions.push(Responsibility.front);
answers.push(Responsibility.back);

var Vote = new BasicCard("In what month do we vote for President?", "November");
questions.push(Vote.front);
answers.push(Vote.back);


//console.log(questions);
//console.log(answers);



// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.

var index = 0;

console.log("United States History Test Flash Cards");
console.log("Let's Play!\n");

function askUser() {

  console.log(questions[index]);

  inquirer.prompt([
    {
      name: "Answer",
      message: "What is your Answer?"
    }
  ]).then(function (userAnswers) {
    console.log("The correct Answer is = " + answers[index] +"\n");

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
  
  BasicCardGame:BasicCardGame 

}


