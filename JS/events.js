import { controls } from "./elements.js";
import * as card from "./elements.js";
import { cards } from "./elements.js";
import * as actions from "./actions.js";
import * as sound from "./sounds.js";

export function registrerControls() { // registra qual botão está sendo clicado
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action; /* o dataset pega o atributo 'data
  da tag html, como demos o nome de data-action nas tags aqui colocamos o .action */ 
  if(typeof actions[action] != "function") {
    return;
  }

  actions[action](); /* aqui seria a mesma coisa que chamar, por exemplo, o actions.running, porém ao invés de chamar uma função só chamamos a que está sendo clicada atravués do target, por isso os nomes das funções têm que ser os mesmos do data- do html */
 })
};

export function musicOn() {
  let cardSelected = '';
  cards.addEventListener('click', (event) => {
    const cardName = event.target.dataset.name; 

    if(cardName == 'tree') {
      card.tree.classList.toggle('music-on');
      card.rain.classList.remove('music-on');
      card.coffee.classList.remove('music-on');
      card.fire.classList.remove('music-on');
    }

    if(cardName == 'rain') {
      card.rain.classList.toggle('music-on');
      card.tree.classList.remove('music-on');
      card.coffee.classList.remove('music-on');
      card.fire.classList.remove('music-on');
    }

    if(cardName == 'coffee') {
      card.coffee.classList.toggle('music-on');
      card.tree.classList.remove('music-on');
      card.rain.classList.remove('music-on');
      card.fire.classList.remove('music-on');
    }

    if(cardName == 'fire') {
      card.fire.classList.toggle('music-on');
      card.tree.classList.remove('music-on');
      card.rain.classList.remove('music-on');
      card.coffee.classList.remove('music-on');
    }

    if(card.tree.classList.contains('music-on')) {
      sound.tree.play();
        card.tree.style.background = '#39b564';
      } else {
        sound.tree.pause();
        card.tree.style.background = '#E1E1E6';
      }

      if(card.rain.classList.contains('music-on')) {
        sound.rain.play();
          card.rain.style.background = '#5b5975';
        } else {
          sound.rain.pause();
          card.rain.style.background = '#E1E1E6';
        }
      
        if(card.coffee.classList.contains('music-on')) {
          sound.coffee.play();
        card.coffee.style.background = '#6f3939';
        } else {
          sound.coffee.pause();
          card.coffee.style.background = '#E1E1E6';      
        }

        if(card.fire.classList.contains('music-on')) {
          sound.fire.play();
          card.fire.style.background = '#ea2222';
        } else {
          sound.fire.pause();
          card.fire.style.background = '#E1E1E6';
        }
    })
}