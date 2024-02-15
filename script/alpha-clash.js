function playNow() {
    addElementById('home-screen')
    removeElementById('play-ground')
    continueGame();
}
function score() {
    addElementById('home-screen')
    addElementById('play-ground')
    removeElementById('final-score')
}

function continueGame() {
    const finalAlphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = finalAlphabet;
    const alphabet = finalAlphabet.toLowerCase();
    setBacgroundColorById(alphabet);
}
function handleButtonPrees(event) {
    const playerPressed = event.key;
    // console.log('Player press', playerPressed);

    const currentAlphabet = document.getElementById("current-alphabet");
    const alphabet = currentAlphabet.innerText;
    const alphabetLower = alphabet.toLowerCase();
    // console.log(playerPressed , alphabetLower);
    if (alphabetLower === playerPressed){
        console.log('You Got A Point');
    }
    else{
        console.log('You Missed , You Lost A Life');
    }
}
document.addEventListener('keyup', handleButtonPrees);

// utility function
function addElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function removeElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet() {
    const alphabets = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'h', 'y', 'z'];

    const randomNumber = Math.random() * 26;
    const index = Math.round(randomNumber)

    const alphabet = alphabets[index];
    return alphabet;
}

function setBacgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}