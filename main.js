var randomNumber = parseInt(Math.random() * 10) + 1;
console.log(randomNumber);

var guessButton = document.getElementById("guessButton");
guessButton.addEventListener('click', function(){
    let guessedNumber = document.getElementById("guessedNumber").value;
    let numbersGuessed = document.getElementById("displayGuessedNumbers");
    let tryResult = document.getElementById("tryResult");

    numbersGuessed.innerHTML += guessedNumber + " / "

    if (guessedNumber == randomNumber) {
        tryResult.innerHTML = "Você acertou!"
    } else {
        tryResult.innerHTML = "Você errou!"
    }
})