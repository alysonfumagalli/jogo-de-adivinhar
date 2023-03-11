var randomNumber = parseInt(Math.random() * 10) + 1;
console.log(randomNumber);

var guessButton = document.getElementById("guessButton");
guessButton.addEventListener('click', function(){
    let guessedNumber = document.getElementById("guessedNumber").value;
    let numbersGuessed = document.getElementById("displayGuessedNumbers");
    let tryResult = document.getElementById("tryResult");

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
})