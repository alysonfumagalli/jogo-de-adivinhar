var randomNumber = parseInt(Math.random() * 10) + 1;
var tries = 10;
console.log(randomNumber);

var guessButton = document.getElementById("guessButton");
guessButton.addEventListener('click', function(){
    let guessedNumber = document.getElementById("guessedNumber").value;
    let numbersGuessed = document.getElementById("displayGuessedNumbers");
    let tryResult = document.getElementById("tryResult");
    let triesLeft = document.getElementById("triesLeft");

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
        tryResult.innerHTML = "Ops...Você perdeu. O número secreto era " + guessedNumber + ".";
    }
})