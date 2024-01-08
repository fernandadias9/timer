import state from "./state.js";
import * as events from "./events.js";
import * as element from './elements.js';

export function updateDisplay(minutes, seconds) {
   minutes = minutes ?? state.minutes;
   seconds = seconds ?? state.seconds;

   element.minutes.textContent = String(minutes).padStart(2, '0');
   element.seconds.textContent = String(seconds).padStart(2, '0');
}

export function countDown() {
  clearTimeout(state.countdownId);

  if(!state.isRunning) {
    return;
  }

  let minutes = Number(element.minutes.textContent);
  let seconds = Number(element.seconds.textContent);

  seconds--;

  if(seconds < 0){
    seconds = 59;
    minutes--;
  }

  state.seconds = seconds;

  if(minutes < 0) {
    reset();
    return;
  }

  state.minutes = minutes;

  updateDisplay(minutes, seconds);

  state.countdownId = setTimeout(() => countDown(), 1000);
}

export function start() {
  updateDisplay();
  events.registrerControls();
  events.musicOn();
}
