function playNow() {
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')
    
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}
function gameOver() {
    hideElementById('home-screen')
    hideElementById('play-ground')
    showElementById('final-score')
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    const currentAlphabet = getTextElementById('current-alphabet');
    removeBacgroundColorById(currentAlphabet);
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
    if(playerPressed=== 'Escape'){
        gameOver();
    }

    const currentAlphabet = document.getElementById("current-alphabet");
    const alphabet = currentAlphabet.innerText;
    const alphabetLower = alphabet.toLowerCase();
    // console.log(playerPressed , alphabetLower);
    if (playerPressed === alphabetLower) {
        const currentScore = getTextElementValueById('current-score')
        const score = currentScore + 1;
        setTextElementValueById('current-score', score);
        removeBacgroundColorById(alphabetLower);
        continueGame();
    }
    else {
        const currentLife = getTextElementValueById('current-life');
        const life = currentLife - 1;
        setTextElementValueById('current-life', life);
        if (life === 0) {
            gameOver()
        }

    }
}
document.addEventListener('keyup', handleButtonPrees);

// utility function
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const valueText = element.innerText;
    const value = parseInt(valueText);
    return value;
}
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
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
function removeBacgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-[#FFA500]');
}

function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}