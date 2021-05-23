
const scure = document.querySelectorAll('.scure');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
const difficulti = document.getElementById('difficulti').textContent;

let result = 0;
let currentTime = timeLeft.textContent;

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timeId);
        alert('Your Game is Over your final score is: ' + result)
    }
}

let timeId = setInterval(countDown, 1000);

function randomScure() {
    scure.forEach(className => {
        className.classList.remove('mole');
    });

    let randomPosition = scure[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole')

    // assign the id of random position to hit posstion
    hitPosition = randomPosition.id
}

scure.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
            console.log(result)
        }
    });
});

function moveMole() {
    let timeId = null;
    timeId = setInterval(randomScure, (1000 - 100 * difficulti));
}

moveMole()