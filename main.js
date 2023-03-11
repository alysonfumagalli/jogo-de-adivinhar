var randomNumber = parseInt(Math.random() * 1000) + 1;
var tries = 10;
var guessButton = document.getElementById("guessButton");
var playAgainButton = document.getElementById("playAgain");
var triesLeft = document.getElementById("triesLeft");
var guessedNumber = document.getElementById("guessedNumber").value;
var numbersGuessed = document.getElementById("displayGuessedNumbers");
var tryResult = document.getElementById("tryResult");

guessButton.addEventListener('click', function(){
    if (guessedNumber != randomNumber) {
        numbersGuessed.innerHTML += guessedNumber + " / "
    } else {
        numbersGuessed.innerHTML += guessedNumber
    }

    if (guessedNumber == randomNumber) {
        tryResult.innerHTML = "Parabéns! Você acertou! O número secreto era " + randomNumber + ".";
    } else if (guessedNumber > randomNumber) {
        tryResult.innerHTML = "Ops...Você errou. O número secreto é menor do que " + guessedNumber + ".";
    } else {
        tryResult.innerHTML = "Ops...Você errou. O número secreto é maior do que " + guessedNumber + ".";
    }

    if (guessedNumber != randomNumber) {
        tries--;
        triesLeft.innerHTML = tries;
    }

    if (tries == 0){
        guessButton.disabled = true;
        tryResult.innerHTML = "Ops...Você perdeu. O número secreto era " + randomNumber + ".";
        if (playAgainButton.style.display == 'none') {
            playAgainButton.style.display = 'inline';
        } else {
            playAgainButton.style.display = 'none';
        }
    }

    document.getElementById("guessedNumber").value = '';
})

playAgainButton.addEventListener('click', function(){
    guessButton.disabled = false;
    tries = 10;
    triesLeft.innerHTML = 10;
    tryResult.innerHTML = '';
    numbersGuessed.innerHTML = "Números chutados: ";
    randomNumber = parseInt(Math.random() * 1000) + 1;
    playAgainButton.style.display = "none";
})