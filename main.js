var inquirer = require("inquirer");
var choiceAmt = 0;
var count = 0;
var questions = [];
var answers = [];
phaseOne();

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
};

// ClozeCard.prototype.printInfo = function() {
//   console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
//   this.age + "\nLanguages: " + this.language);
// };

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
function phaseOne() {
    inquirer.prompt([{

        name: "howMany",
        type: "input",
        message: "How many cards would you like to create? (Max: 10)",
        validate: function(value) {
            if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                return true;
            }
            return false;
        }
    }]).then(function(initialPhase) {
        choiceAmt = initialPhase.howMany;
        console.log(choiceAmt);
        phaseTwo();
    });
}

function phaseTwo() {
    inquirer.prompt([{
        name: "whatType",
        message: "What type of flashcard would you like generated?",
        type: "rawlist",
        choices: ["Basic", "Cloze"]
    }]).then(function(setupPhase) {
        console.log(setupPhase.whatType + " chosen. Intializing. . .");
        console.log(choiceAmt) //Check - Delete later
        if (setupPhase.whatType === "Basic") {
            phaseThreeBasic();
        } else if (setupPhase.whatType === "Cloze") {
            phaseThreeCloze();
        }

    });
}

function phaseThreeBasic() {
    if (count < choiceAmt) {
        inquirer.prompt([{
            name: "frontQuestion",
            type: "input",
            message: "Please input the question for the flashcard's front side."
        }, {
            name: "backAnswer",
            type: "input",
            message: "Please input the answer for the flashcard's back side."
        }]).then(function(basic) {
            var basicQues = new BasicCard(basic.frontQuestion, basic.backAnswer);
            count++;
            questions.push(basic.frontQuestion);
            answers.push(basic.backAnswer);
            console.log(questions);
            console.log("================")
            console.log("================")
            console.log("================")
            console.log(answers);
            phaseThreeBasic();
        })
    } else if (count == choiceAmt) {
        console.log("All questions have been made!")
        basicCardInit();
    }
}
// }
// }
// }
function basicCardInit() {
    for (var i = 0; i < choiceAmt;i++) {
        console.log("Question: "+questions[i]);
                inquirer.prompt([{
            name: "answerHere",
            type: "input",
            message: "What's the answer?"
        }]).then(function(answerBasic) {
            console.log(answerBasic.answerHere);
            console.log(answers[i]);
            if (answerBasic.answerHere === answers[i]) {
                console.log("Correct!");
            }
            else {
                console.log("Incorrect!");
            }
        })
    }
}

function phaseThreeCloze() {

}
