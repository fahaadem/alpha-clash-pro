function removeElement(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

function addElement(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

function getARandomAlphabet() {
    //  Get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    // get random alphabet
    const alphabet = alphabets[index];
    return alphabet;
}


function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}

function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]')
}

function getCurrentScore(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
}

function setScore(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function gameOver() {
    addElement('play-ground');
    removeElement('final-score');

    const currentAlphabet = document.getElementById('alphabet');
    const alphabet = currentAlphabet.innerText
    removeBackgroundColor(alphabet)
}