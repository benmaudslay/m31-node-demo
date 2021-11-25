import inquirer from "inquirer"
import questions from "./questions.js"

const questionTime = async () => {
  let response = await inquirer.prompt(questions)

  if (!response.confirmation) {
    response = await inquirer.prompt(questions)
  }
  console.log(response)
}

questionTime()
// console.log(questions)
