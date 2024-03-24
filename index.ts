#! /usr/bin/env node

import inquirer from "inquirer";

//computer will generate a randomNumber.
// user input for Guessing number.
//compare user input with computer generated number and show result.
 
const randomNumber = Math.floor(Math.random() * 10+1);

const answers = await inquirer.prompt([

    { name : "userGuessedNumber",
      Type : "number",
      message : "please Guessed a Number between 1-10",

    }
])  
if (answers.userGuessednumber === randomNumber){
    console.log("congtratulation ! you guessed a right number.");
} else {
    console.log("you guessed wrong number");
}

   

