//create audio object and get start audio button object
const audio = new Audio('sound/scott_opening.mp3');
const startAudioButton = document.getElementById('start-audio');

/**
 * When button is clicked, play audio
 * @param {Event} _event 
 */
startAudioButton.onclick = (_event) => {
  audio.play();
}