import inquirer from "inquirer"

let pet

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
    .then((response) => {
      console.table(response)
      pet = { type: response.question1, name: response.question2 }
    })
    .then(() => gameLoop())
}

const gameLoop = () => {
  // This is where you can run some recursion to make a loop
  // if(pet.health < 10) {
  //   console.log("Game over")
  //   return
  // }
  // func ends here if ^ condition is met

  inquirer
    .prompt([
      {
        type: "list",
        name: "question1",
        message: "This is a question that you will see again soon...",
        choices: ["Woo", "yay", "see ya"],
      },
    ])
    .then((answer) => {
      console.table(answer)
      console.log(pet)
      if (answer.question1 === "Woo") {
        // pet.play()
        console.log("Playing")
      } else if (answer.question1 === "yay") {
        // pet.feed()
        console.log("Feeding")
      } else {
        // pet.drink()
        console.log("Drinking")
      }
    })
    // this line will trigger the function to run again
    .then(() => gameLoop())
}

init()
