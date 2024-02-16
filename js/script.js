
// function to generate a random letter
function randomLetter() {
    const letter = 'abcdefghijklmnopqrstuvwxyz/';
    const arrLetter = letter.split('');
    const randomIndex = Math.round(Math.random()*26);
    return arrLetter[randomIndex];
}




// function to remove hidden class
function showElement(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

// function to add hidden class
function hideElement(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}




// function to add background color
function setBackgroundColor(id) {
    const element = document.getElementById(id);
    element.classList.add('bg-[#FFA500]');
}

// function to remove background color
function removeBackgroundColor(id) {
    const element = document.getElementById(id);
    element.classList.remove('bg-[#FFA500]');
}




// function to add green color
function setGreen(id) {
    const element = document.getElementById(id);
    element.classList.add('bg-green-500');
}

// function to remove green color
function removeGreen(id) {
    const element = document.getElementById(id);
    element.classList.remove('bg-green-500');
}




// function to add red color
function setRed(id) {
    const element = document.getElementById(id);
    element.classList.add('bg-red-500');
}

// function to remove red color
function removeRed(id) {
    const element = document.getElementById(id);
    element.classList.remove('bg-red-500');
}




// function to get innerText
function getInnerText(id) {
    const element = document.getElementById(id);
    return element.innerText;
}

// function to set innerText
function setInnerText(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

// ------------------------------------------------------------------ //

document.addEventListener('keypress', event => {
    const currLetter = getInnerText('display-letter').toLowerCase();
    
    if(event.key === currLetter) {
        removeBackgroundColor(currLetter);
        setGreen(currLetter);
    }
    else {
        removeBackgroundColor(currLetter);
        setRed(currLetter);
    }
})

document.addEventListener('keyup', event => {
    const currLetter = getInnerText('display-letter').toLowerCase();

    if(event.key === currLetter) {
        const score = parseInt(getInnerText('score')) + 1;
        setInnerText('score', score);
        setInnerText('final-score', score);
        removeBackgroundColor(currLetter);
        removeGreen(currLetter);
        continueGame();
    }
    else {
        const life = parseInt(getInnerText('life')) - 1;

        if(life === 0) {
            setInnerText('score', 0);
            setInnerText('life', 5);
            removeBackgroundColor(currLetter);
            removeRed(currLetter);
            hideElement('game-window');
            showElement('result-window');
        }
        else {
            setInnerText('life', life);
            removeBackgroundColor(currLetter);
            removeRed(currLetter);
            continueGame();
        }

    }
})

function continueGame() {
    const letter = randomLetter();
    setInnerText('display-letter', letter);
    setBackgroundColor(letter);
}

function play() {
    hideElement('start-window');
    showElement('game-window');
    hideElement('result-window');
    continueGame();
}