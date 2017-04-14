var inquirer = require("inquirer");
var choiceAmt = 0;
var count = 0;
var game = 0;
var score = 0;
var questions = [];
var questions2 = [];
var answers = [];
phaseOne();

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

function ClozeCard(questionCloze, answer) {
    this.questionCloze = questionCloze;
    this.answer = answer;

};

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

function basicCardInit() {
    if (game < choiceAmt) {
        inquirer.prompt([{
            name: "answerHere",
            type: "input",
            message: questions[game]
        }]).then(function(answerBasic) {
            if (answerBasic.answerHere === answers[game]) {
                console.log("Correct!" + "\n" + "The answer is: " + answers[game]);
                score++;
            } else {
                console.log("Incorrect!" + "\n" + "The answer is: " + answers[game]);
            }
            game++;
            basicCardInit();
        });
    } else {
        console.log("You got " + score + " out of " + count + " correct!")
        console.log('\x1b[5m' + "░░░░" + '\x1b[46m' + "█▐▄▒▒▒▌▌▒▒▌" + '\x1b[0m\x1b[5m' + "░" + '\x1b[46m' + "▌▒▐" + '\x1b[0m\x1b[5m' + "▐" + '\x1b[46m' + "▐▒▒▐▒▒▌▒▀▄▀▄" + '\x1b[0m\x1b[5m' + "░")
        console.log('\x1b[5m' + "░░░" + '\x1b[46m' + "█▐▒▒▀▀▌" + '\x1b[0m\x1b[5m' + "░" + '\x1b[46m' + "▀▀▀" + '\x1b[0m\x1b[5m' + "░░" + '\x1b[46m' + "▀▀▀" + '\x1b[0m\x1b[5m' + "░░" + '\x1b[46m' + "▀▀▄▌▌▐▒▒▒▌▐" + '\x1b[0m\x1b[5m' + "░")
        console.log('\x1b[5m' + "░░" + '\x1b[46m' + "▐▒▒▀▀▄▐" + '\x1b[0m\x1b[5m' + "░▀▀▄▄░░░░░░░░░░░" + '\x1b[46m' + "▐▒▌▒▒▐" + '\x1b[0m\x1b[5m' + "░" + '\x1b[46m' + "▌" + '\x1b[0m\x1b[5m' + "")
        console.log('\x1b[5m' + "░░" + '\x1b[46m' + "▐▒▌▒▒▒▌" + '\x1b[0m\x1b[5m' + "░▄▄▄▄█▄░░░░░░░▄▄▄" + '\x1b[46m' + "▐▐▄▄▀" + '\x1b[0m\x1b[5m' + "░░")
        console.log('\x1b[5m' + "░░" + '\x1b[46m' + "▌▐▒▒▒▐" + '\x1b[0m\x1b[5m' + "░░░░░░░░░░░░░▀█▄░░░░▌▌░░░")
        console.log('\x1b[5m' + "" + '\x1b[46m' + "▄▀▒▒▌▒▒▐" + '\x1b[0m\x1b[5m' + "░░░░░░░" + '\x1b[31m' + "▄" + '\x1b[0m\x1b[5m' + "░░" + '\x1b[31m' + "▄" + '\x1b[0m\x1b[5m' + "░░░░░▀▀░░▌▌░░░")
        console.log('\x1b[5m' + "" + '\x1b[46m' + "▄▄▀▒▐▒▒▐" + '\x1b[0m\x1b[5m' + "░░░░░░░" + '\x1b[31m' + "▐▀▀▀▄▄▀" + '\x1b[0m\x1b[5m' + "░░░░░░▌▌░░░")
        console.log('\x1b[5m' + "░░░░" + '\x1b[46m' + "█▌▒▒▌" + '\x1b[0m\x1b[5m' + "░░░░░" + '\x1b[31m' + "▐▒▒▒▒▒▌" + '\x1b[0m\x1b[5m' + "░░░░░░▐▐▒▀▀▄")
        console.log('\x1b[5m' + "░░" + '\x1b[46m' + "▄▀▒▒▒▒▐" + '\x1b[0m\x1b[5m' + "░░░░░" + '\x1b[31m' + "▐▒▒▒▒▐" + '\x1b[0m\x1b[5m' + "░░░░░▄█▄▒▐▒▒▒")
        console.log('\x1b[5m' + "" + '\x1b[46m' + "▄▀▒▒▒▒▒▄██▀▄▄" + '\x1b[0m\x1b[5m' + "░░" + '\x1b[31m' + "▀▄▄▀" + '\x1b[0m\x1b[5m' + "░░▄▄▀█▄░█▀▒▒▒▒" + '\x1b[0m')
    }
}

function phaseThreeCloze() {
    if (count < choiceAmt) {
        inquirer.prompt([{
            name: "clozeQuestion",
            type: "input",
            message: "Please input the entire statement which includes the question and the answer in one argument."
        }, {
            name: "clozePortion",
            type: "input",
            message: "Please input the answer to the statement that will be partitioned for flashcard generation."
        }]).then(function(cloze) {
            var ClozeQues = new ClozeCard(cloze.clozeQuestion, cloze.clozePortion);
            questions2.push(cloze.clozeQuestion);
            count++;
            var a = cloze.clozeQuestion.replace(cloze.clozePortion, "...")
            questions.push(a);
            answers.push(cloze.clozePortion);

            console.log(questions);
            console.log("================")
            console.log("================")
            console.log("================")
            console.log(answers);
            phaseThreeCloze();
        })
    } else if (count == choiceAmt) {
        console.log("All questions have been made!")
        clozeCardInit();
    }
}

function clozeCardInit() {
    if (game < choiceAmt) {
        inquirer.prompt([{
            name: "answerCl",
            type: "input",
            message: questions[game]
        }]).then(function(answerCloze) {
            if (answerCloze.answerCl === answers[game]) {
                console.log("Correct!" + "\n" + "The answer is: " + questions2[game]);
                score++;
            } else {
                console.log("Incorrect!");
            }
            game++;
            clozeCardInit();
        });
    } else {
        console.log("You got " + score + " out of " + count + " correct!")
        console.log('\x1b[5m' + "░░░░" + '\x1b[46m' + "█▐▄▒▒▒▌▌▒▒▌" + '\x1b[0m\x1b[5m' + "░" + '\x1b[46m' + "▌▒▐" + '\x1b[0m\x1b[5m' + "▐" + '\x1b[46m' + "▐▒▒▐▒▒▌▒▀▄▀▄" + '\x1b[0m\x1b[5m' + "░")
        console.log('\x1b[5m' + "░░░" + '\x1b[46m' + "█▐▒▒▀▀▌" + '\x1b[0m\x1b[5m' + "░" + '\x1b[46m' + "▀▀▀" + '\x1b[0m\x1b[5m' + "░░" + '\x1b[46m' + "▀▀▀" + '\x1b[0m\x1b[5m' + "░░" + '\x1b[46m' + "▀▀▄▌▌▐▒▒▒▌▐" + '\x1b[0m\x1b[5m' + "░")
        console.log('\x1b[5m' + "░░" + '\x1b[46m' + "▐▒▒▀▀▄▐" + '\x1b[0m\x1b[5m' + "░▀▀▄▄░░░░░░░░░░░" + '\x1b[46m' + "▐▒▌▒▒▐" + '\x1b[0m\x1b[5m' + "░" + '\x1b[46m' + "▌" + '\x1b[0m\x1b[5m' + "")
        console.log('\x1b[5m' + "░░" + '\x1b[46m' + "▐▒▌▒▒▒▌" + '\x1b[0m\x1b[5m' + "░▄▄▄▄█▄░░░░░░░▄▄▄" + '\x1b[46m' + "▐▐▄▄▀" + '\x1b[0m\x1b[5m' + "░░")
        console.log('\x1b[5m' + "░░" + '\x1b[46m' + "▌▐▒▒▒▐" + '\x1b[0m\x1b[5m' + "░░░░░░░░░░░░░▀█▄░░░░▌▌░░░")
        console.log('\x1b[5m' + "" + '\x1b[46m' + "▄▀▒▒▌▒▒▐" + '\x1b[0m\x1b[5m' + "░░░░░░░" + '\x1b[31m' + "▄" + '\x1b[0m\x1b[5m' + "░░" + '\x1b[31m' + "▄" + '\x1b[0m\x1b[5m' + "░░░░░▀▀░░▌▌░░░")
        console.log('\x1b[5m' + "" + '\x1b[46m' + "▄▄▀▒▐▒▒▐" + '\x1b[0m\x1b[5m' + "░░░░░░░" + '\x1b[31m' + "▐▀▀▀▄▄▀" + '\x1b[0m\x1b[5m' + "░░░░░░▌▌░░░")
        console.log('\x1b[5m' + "░░░░" + '\x1b[46m' + "█▌▒▒▌" + '\x1b[0m\x1b[5m' + "░░░░░" + '\x1b[31m' + "▐▒▒▒▒▒▌" + '\x1b[0m\x1b[5m' + "░░░░░░▐▐▒▀▀▄")
        console.log('\x1b[5m' + "░░" + '\x1b[46m' + "▄▀▒▒▒▒▐" + '\x1b[0m\x1b[5m' + "░░░░░" + '\x1b[31m' + "▐▒▒▒▒▐" + '\x1b[0m\x1b[5m' + "░░░░░▄█▄▒▐▒▒▒")
        console.log('\x1b[5m' + "" + '\x1b[46m' + "▄▀▒▒▒▒▒▄██▀▄▄" + '\x1b[0m\x1b[5m' + "░░" + '\x1b[31m' + "▀▄▄▀" + '\x1b[0m\x1b[5m' + "░░▄▄▀█▄░█▀▒▒▒▒" + '\x1b[0m')
    }
}
