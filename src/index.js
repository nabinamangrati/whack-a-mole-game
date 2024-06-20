let score = 0;
let scoreDisplay = document.getElementById('score');

let holes = document.getElementsByClassName('hole');

const timeEl = document.querySelector('#time');
let time = 60;
 
let hello = setInterval(function() {
    let index = Math.floor(Math.random() * holes.length);
    holes[index].classList.toggle('mole');
    time--;
    timeEl.innerHTML = time;
    if (time === 0) { // time's up
        clearInterval(hello); // Stop the interval
        alert('Time is up! Your score is: ' + score);
        document.location.href = "home.html";
    }
}, 1000); // Changed to 1000ms (1 second) for better gameplay

let gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent) {
    if (clickEvent.target.matches('.mole')) {
        clickEvent.target.classList.remove('mole');
        score++;
        scoreDisplay.innerText = score;
        
        if (score > 50) {
            alert("Game done! Go back to home page to start again");
            clearInterval(hello); // Stop the interval
            document.location.href = "home.html";
        }
    }
});
