import inquirer from "inquirer"

let questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "confirm",
    name: "confirmation",
    message: "Is this your real name?",
  },
]

const questionTime = async () => {
  let response = await inquirer.prompt(questions)
  console.log(response)
}

questionTime()
