var inquirer = require("inquirer");
var choiceAmt = 0;
phaseOne();
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  };

function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  };

ClozeCard.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
  this.age + "\nLanguages: " + this.language);
};

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
function phaseOne() {
inquirer.prompt([
  {
    
    name: "howMany",
    type: "input",
    message: "How many cards would you like to create?",
    validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
  }
]).then(function(initialPhase) {
	choiceAmt = initialPhase.howMany;
	console.log(choiceAmt);
phaseTwo();
});
}

function phaseTwo() {
	inquirer.prompt([
  {
    name: "whatType",
    message: "What type of flashcard would you like generated?",
    type: "rawlist",
    choices: ["Basic", "Cloze"]
  }
]).then(function(setupPhase) {
	console.log(setupPhase.whatType + " chosen. Intializing. . .");
	if (setupPhase.whatType === "Basic") {
		phaseThreeBasic();	
	}
	else if (setupPhase.whatType === "Cloze") {
		phaseThreeCloze();
	}
	
});
}
function phaseThreeBasic() {

}
function phaseThreeCloze() {
	
}