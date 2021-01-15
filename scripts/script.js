// Drum Kit
// http://keycode.info/

// This code is based on code found at
// https://javascript30.com

function playSound(e) {
    // console.log(e.code);
    const sound = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    // console.log(key);
    if(!sound) return;
    sound.currentTime = 0; // rewined to the start of the sound
    sound.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== "transform") return; // skip it if it's not a transform
    this.classList.remove('playing');  
    // console.log(this); // to test what it is refering to!
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// we could use animationend as well!

window.addEventListener('keydown', playSound);

// End... Atena