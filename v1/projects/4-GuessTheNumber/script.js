let randomNumber = Math.floor(Math.random() * (100) + 1);
let userGuess = document.querySelector('#guessIPField');
let userSubmit = document.querySelector('#submitField');
let startAgain = document.querySelector('.resultParas');
let guesses = document.querySelector('.guesses');
let remainingGuesses = document.querySelector('.guessRemains');
let lowOrHi = document.querySelector('.lowOrHi');
let resultParas = document.querySelector('.resultParas');

let previousGuesses = [];
let guessCount = 10;
let playGame = true;

let button = document.createElement('button')

if (playGame) {
    userSubmit.addEventListener( 'click', (e) => {
        e.preventDefault()
        let userIP = Number(userGuess.value);
        console.log(userIP);
        validateGuess(userIP);
        console.log(guessCount);
        
    } )
}

function validateGuess(guess) {
    // validation of guesses
    if (isNaN(guess)) {
        alert('Enter a valid number.')
    } else if (guess < 1) {
        alert('Enter a number greater than 1.')
    } else if (guess > 100) {
        alert('Enter a number lower than 100.')
    } else {
        previousGuesses.push(guess)
        displayGuess(guess)
        if (guessCount === 0) {
            displayMessage(`Game Over. Number Was ${randomNumber}`)
            endGame()
        } else {
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    // if the user guess is low or high or equal
    if (guess === randomNumber) {
        displayMessage(`You guessed it right.`)
        endGame()
    } else if (guess > randomNumber) {
        displayMessage(`Too High.`)
    } else if (guess < randomNumber) {
        displayMessage(`Too Low.`)
    }
}
function displayGuess(guess) {
    // displays the previous guesses, updates the remaining guesses
    userGuess.value = ''
    guesses.innerHTML += `${guess} `
    guessCount--;
    remainingGuesses.innerHTML = `${guessCount}`
}

function displayMessage(message) {
    // displays the guesses
    lowOrHi.innerHTML = `${message}`
}

function endGame() {
    // end the current game
    userGuess.value = ''
    userGuess.setAttribute('disabled', '');
    button.classList.add('newGameButton');
    // button.setAttribute('type', 'submit');
    button.textContent = `Start New Game`;
    resultParas.appendChild(button);
    playGame = false;
    newGame();
}

function newGame() {
    // starts a new game
    let newGameButton = document.querySelector('.newGameButton')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = Math.floor(Math.random() * (100) + 1);
        previousGuesses = [];
        guessCount = 10;
        playGame = true;
        guesses.innerHTML = '';
        remainingGuesses.innerHTML = `${guessCount}`
        userGuess.removeAttribute('disabled');
        resultParas.removeChild(button);
    } )
}
