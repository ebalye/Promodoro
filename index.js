// Import stylesheets
import './style.css';

// Write Javascript code!
/*
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

*/
let state = 'work';
const currentState = document.getElementById('state');
const time = document.querySelector('h2');
let hours = 1;
let seconds = 60;
let minutes = 59;
const mainbutton = document.getElementById('timer');

const buttonstop = document.getElementById('buttonstop');
let interval;

currentState.innerHTML = state;
mainbutton.addEventListener('click', () => {
  restarttime();
  starttime(seconds);
});

// function that restarts the timer
const restarttime = () => {
  time.innerHTML = '00:00:00';
};

// function that updates the state to either work or rest
const updateState = (state) => {
  currentState.innerHTML = state;
};

//the function that handles the countdown and stop time(to be transfered to a separate function) once start timer is pressed
const starttime = (seconds) => {
  state = 'work';
  updateState(state);
  clearInterval(interval);
  interval = setInterval(() => {
    seconds--;
    time.innerHTML = `${hours}:${minutes}:${seconds}`;

    if (seconds <= 0 && minutes > 0) {
      seconds = 60;
      minutes--;
      clearInterval();
    }
    if (seconds <= 0 && minutes == 0 && hours == 0) {
      seconds = 60;
      minutes = 59;
      hours--;
    }
    if (seconds < 0 && minutes == 0) {
      clearInterval(interval);
      time.innerHTML = 'timerstopped';
      state = 'rest';
      updateState(state);
    }
  }, 1000);
};

//event listener for stop timer, Changes the timer to stopped timer and also changes the state to rest
buttonstop.addEventListener('click', () => {
  clearInterval(interval);
  time.innerHTML = 'stopped timer';
  state = 'rest';
  updateState(state);
});
