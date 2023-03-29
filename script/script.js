function GetTime() {

    //get time
    const fullDate = new Date;
    const hours = fullDate.getHours();
    const status = document.getElementById('time');
    if (status == null) {
        return;
    }
    //Greetings in an array
    const Greetings = ['Good morning :)', 'Good afternoon :)', 'Good evening :)', 'Sleep well :)'];


    //check what time it is and give a greeting based on time
    switch (true) {
        case hours > 17:
            status.innerHTML = Greetings[2];
            break;
        case hours > 11:
            status.innerHTML = Greetings[1];
            break;
        case hours > 5:
            status.innerHTML = Greetings[0];
            break;
        default:
            status.innerHTML = Greetings[3];
            break;
    }
}

GetTime();

function Heart() {
    alert("I have a question for you");
    alert("Would you like to be my Valentine?");
    const status = document.querySelector('h1');
    status.classList.add('question');
    status.innerHTML = 'Would you like to be my Valentine?';
    const images = document.getElementById('navimg');
    images.src = '/images/heartclicked.png';
    images.setAttribute('onclick', 'Yes()');
}

function Yes() {
    alert("Let me know on discord :)");
    const images = document.getElementById('navimg');
    images.setAttribute('onclick', 'lol()');
}

let Timespressed = 0;

function lol() {
    Timespressed++
    alert("I love you :)");
    if (Timespressed == 3) {
        window.location.replace("/pages/secret.php");
    }
}

var score = 0;
var scorelost = 0;
var drew = 0;
let player;
let mychoice;
const images = document.getElementsByClassName('RPS');
const startButton = document.getElementById('start-game-button');


function StartGame() {
    mychoice = Math.floor(Math.random() * 3);
    const position = document.getElementsByClassName('top-heading-game')[0];
    console.log(mychoice);
    const options = ['/images/rock.png', '/images/paper.png', '/images/scissors.png'];
    const clickedOptions = ['rock()', 'paper()', 'scissors()']
    for (let i = 0; i < 3; i++) {
        const choice = document.createElement('img');
        choice.src = options[i];
        choice.setAttribute('onclick', clickedOptions[i]);
        choice.classList.add("RPS");
        position.appendChild(choice);
    }
    startButton.innerHTML = 'Reset';
    startButton.setAttribute('onclick', 'ResetGame()');

    const points = document.createElement('h3');
    points.innerHTML = "You have won " + score + " rounds " + "and lost " + scorelost + " rounds " + drew + " drew rounds against me";
    points.setAttribute('id', 'points');
    points.setAttribute('onclick', 'scoreClick()');
    position.appendChild(points);
}


function rock() {
    player = 0;

    switch (true) {
        case mychoice == 1:
            startButton.innerHTML = "I won! :) I chose paper. Play again?";
            scorelost++;
            startButton.setAttribute('onclick', 'StartGame()');
            break;
        case mychoice == 2:
            startButton.innerHTML = "I lost! :( I chose scissors. Play again?";
            score++;
            startButton.setAttribute('onclick', 'StartGame()');
            break;
        default:
            startButton.innerHTML = "Draw, I also chose rock. Play again?";
            drew++;
            startButton.setAttribute('onclick', 'StartGame()');
            break;
    }
    for (let o = images.length - 1; o >= 0; o--) {
        images[o].remove();
    }
    const scoreId = document.getElementById('points');
    scoreId.remove();
}
const scoreId = document.getElementById('points');
function paper() {
    player = 1;

    switch (true) {
        case mychoice == 0:
            startButton.innerHTML = "I lost! :( I chose rock. Play again?";
            score++;
            startButton.setAttribute('onclick', 'StartGame()');
            break;
        case mychoice == 2:
            startButton.innerHTML = "I won! :) I chose scissors. Play again?";
            scorelost++;
            startButton.setAttribute('onclick', 'StartGame()');
            break;
        default:
            startButton.innerHTML = "Draw, I also chose paper. Play again?";
            drew++;
            startButton.setAttribute('onclick', 'StartGame()');
            break;
    }
    for (let o = images.length - 1; o >= 0; o--) {
        images[o].remove();
    }
    const scoreId = document.getElementById('points');
    scoreId.remove();
}

function scissors() {
    player = 2;

    switch (true) {
        case mychoice == 2:
            startButton.innerHTML = "I lost! :( I chose paper. Play again?";
            score++;
            startButton.setAttribute('onclick', 'StartGame()');
            break;
        case mychoice == 0:
            startButton.innerHTML = "I won! :) I chose rock. Play again?";
            scorelost++;
            startButton.setAttribute('onclick', 'StartGame()');
            break;
        default:
            startButton.innerHTML = "Draw, I also chose scissors. Play again?";
            drew++;
            startButton.setAttribute('onclick', 'StartGame()');
            break;
    }
    for (let o = images.length - 1; o >= 0; o--) {
        images[o].remove();
    }
    const scoreId = document.getElementById('points');
    scoreId.remove();
}

function ResetGame() {
    score = 0;
    scorelost = 0;
    drew = 0;
    const startButton = document.getElementById('start-game-button');
    startButton.innerHTML = 'start game';
    startButton.setAttribute('onclick', 'StartGame()');
    for (let o = images.length - 1; o >= 0; o--) {
        images[o].remove();
    }
    const scoreId = document.getElementById('points');
    scoreId.remove();
}

function scoreClick() {
    alert("Don't take it personally");
    alert("I love you 3000 :)");
}