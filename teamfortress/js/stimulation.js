// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  83: 's',
  84: 't',
  73: 'i',
  77: 'm',
  85: 'u',
  76: 'l',
  65: 'a',
  79: 'o',
  78: 'n'
};

// the 'official' Konami Code sequence
var konamiCode = ['s','t','i','m','u','l','a','t','i','o','n'];
// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;
// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];
  // compare the key with the required key
  if (key == requiredKey) {
    // move to the next key in the konami code sequence
    konamiCodePosition++;
    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  document.body.style.backgroundImage = "url('/images/placeholder.png')";
  var audio = new Audio('/audio/scrybeofthemagicksedited-originalbyjonahsenzel.mp3');
  audio.play();
}