const generateRandomNumber = () =>{
    return Math.floor(Math.random() * 100) + 1
}

const verifyRandomNumber = (secretNumber, guessedNumber, intents) => {
    if(guessedNumber == secretNumber){
        console.log("Congratulations! You guessed random number!")
        console.log("It took you "+intents+" tries")
    }
    else if(guessedNumber > secretNumber){
        console.log("The secret number is less")
    }
    else if(guessedNumber < secretNumber){
        console.log("The secret number is greater")
    }
}

module.exports = {
    generateRandomNumber,
    verifyRandomNumber
}