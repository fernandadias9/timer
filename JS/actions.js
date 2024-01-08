import state from "./state.js";
import * as timer from "./timer.js";

export function running() {
  document.documentElement.classList.add("running");
  state.isRunning = true;
  timer.countDown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  state.minutes = 25;
  state.seconds = 0;
  timer.updateDisplay();
}

export function addMinutes() {
  state.minutes = state.minutes + 5;
  timer.updateDisplay();
}

export function removeMinutes() {
  state.minutes = state.minutes - 5;
  timer.updateDisplay();
}



