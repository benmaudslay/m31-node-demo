const inquirer = require("inquirer")

const init = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "question1",
        message: "Hello, what can I get for you today?",
        choices: ["Latte", "Cappacino", "Mocha", "Flat White", "Water"],
      },
      {
        type: "input",
        name: "question2",
        message: "May I take you name please?",
      },
    ])
    .then((answers) => {
      console.table(answers)
    })
    .then(() => gameLoop())
}

const gameLoop = () => {
  // This is where you can run some recursion to make a loop

  inquirer
    .prompt([
      {
        type: "list",
        name: "question1",
        message: "This is a question that you will see again soon...",
        choices: ["Woo", "yay", "see ya"],
      },
    ])
    .then((answers) => {
      console.table(answers)
    })
    // this line will trigger the function to run again
    .then(() => gameLoop())
}

init()
