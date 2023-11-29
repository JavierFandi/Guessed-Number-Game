const readlineSync = require('readline-sync')
const {generateRandomNumber, verifyRandomNumber} = require('./Guessed')

const userNumber = () => {
    return readlineSync.question('Enter a number: ')
}

const gameGuessed = () => {
    const secretNumber = generateRandomNumber()
    let guessedNumber = 0
    let intents = 1

    console.log("Welcome to Guessed Secret Number!")
    console.log("Try to guess a number from 1 to 100")

    while(guessedNumber != secretNumber) {
        guessedNumber = userNumber()
        verifyRandomNumber(secretNumber, guessedNumber, intents)
        intents++
    }

}

gameGuessed()