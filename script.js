// Background Music
const backgroundMusic = new Audio('background_music.mp3');
backgroundMusic.loop = true;

// start game
document.addEventListener('click', () => {
  gamePlaying = true;
  backgroundMusic.play(); // Start playing background music
});