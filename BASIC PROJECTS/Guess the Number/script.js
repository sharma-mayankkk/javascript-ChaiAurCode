let randomNum = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numOfGuesses = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a valid Number')
    } else if (guess < 1) {
        alert('Please Enter a Number greater than 0')
    } else if (guess > 100) {
        alert('Please Enter a Number less than 100')
    } else {
        prevGuess.push(guess)
        if (numOfGuesses > 10) {
            displayGuess(guess)
            displayMessage(`Game over!! Random Number was ${randomNum}.`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You Guessed it right Blud :)`);
        endGame()
    } else if (guess < randomNum) {
        displayMessage(`Number is Toooooooo Low :(`);
    } else if (guess > randomNum) {
        displayMessage(`Number is Tooooooo High(just like u) :)`);
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}     `
    numOfGuesses++;
    remaining.innerHTML = `${11 - numOfGuesses}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e)=>{
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numOfGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    });
}