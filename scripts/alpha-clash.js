function handleKeyboardKeyPress(event) {
    //  player pressed button
    const playerPressed = event.key;

    // if player pressed 'Esc' game is over
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //  expected button for pressed
    const currentKeyElement = document.getElementById('alphabet');
    const currentKey = currentKeyElement.innerText;
    const expectedAlphabet = currentKey.toLowerCase();

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        const alphabet = document.getElementById(playerPressed);
        alphabet.classList.remove('bg-[red]');
        removeBackgroundColor(playerPressed);
        continueGame();
        

        // update score:
        // 1. get current score:
        // -------------------------------------------------------------------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // -------------------------------------------------------------------------
        const currentScore = getCurrentScore('current-score');
        const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        setScore('current-score', newScore);
        
        // show score:
        const showPlace = document.getElementById('show-score');
        showPlace.innerText = newScore;
    }
    else {
        const alphabet = document.getElementById(playerPressed);
        alphabet.classList.remove('bg-[red]');

        // update life:
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        const currentLife = getCurrentScore('current-life');
        const newLife = currentLife - 1;
        setScore('current-life', newLife)

        if(newLife === 0){
            gameOver();
        }
    }


}


// capture keyboard keypress
document.addEventListener('keyup', handleKeyboardKeyPress)

// additional work
function setBackground(event) {
    const playerPressed = event.key;
    const alphabet = document.getElementById(playerPressed);
    alphabet.classList.add('bg-[red]');
}
document.addEventListener('keydown', setBackground)


function continueGame() {
    const alphabet = getARandomAlphabet();
    const alphabetScreen = document.getElementById('alphabet');
    alphabetScreen.innerText = alphabet;

    // set background color
    setBackgroundColor(alphabet);
}

function play() {
    //  hide everything and show the play ground:
    addElement('home-screen');
    addElement('final-score');
    removeElement('play-ground');

    // set new life and score:
    setScore('current-score', 0);
    setScore('current-life', 5);

    continueGame();
    // const playGround = document.getElementById('play-ground');
    // playGround.classList.remove('hidden');
}