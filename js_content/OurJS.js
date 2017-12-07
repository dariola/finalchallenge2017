function playSound(whichone) {

    var sound1 = document.getElementById('ambient_sounds1');
    var sound2 = document.getElementById('ambient_sounds2');
    var sound3 = document.getElementById('ambient_sounds3');

    switch (whichone){
        case 1:
            sound1.volume=1;
            sound1.play();
            break;
        case 2:
            sound2.volume=1;
            sound2.play();
            break;
        case 3:
            sound3.volume=1;
            sound3.play();
            break;
        default:
            sound3.play();
    }

}

function stopSound(whichone) {

    var sound1 = document.getElementById('ambient_sounds1');
    var sound2 = document.getElementById('ambient_sounds2');
    var sound3 = document.getElementById('ambient_sounds3');

    switch (whichone){
        case 1:
            fadeOut(1);
            break;
        case 2:
            fadeOut(2);
            break;
        case 3:
            fadeOut(3);
            break;
        default:
            stopAll();
    }

}

function fadeOut(whichone) {
    var sound1 = document.getElementById('ambient_sounds1');
    var sound2 = document.getElementById('ambient_sounds2');
    var sound3 = document.getElementById('ambient_sounds3');

    if(whichone===1) {
        while (sound1.volume>0) {
                sound1.volume -= 0.00005;
        }
        if(!sound1.volume>0){
            sound1.pause();
        }
    }
    else if(whichone ===2){
        while (sound2.volume>0) {

            sound2.volume -= 0.00005;
        }
        if(!sound2.volume>0){
            sound2.pause();
        }
    }
    else {
        while (sound3.volume>0) {

            sound3.volume -= 0.00005;
        }
        if(!sound3.volume>0){
            sound3.pause();
        }
    }
}

function stopAll() {

    var sounds_all = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        sounds_all[i].pause();
    }

}


var inputRange = document.getElementsByClassName('range')[0],
    maxValue = 100, // the higher the smoother when dragging
    speed = 5,
    currValue, rafID;

// set min/max value
inputRange.min = 0;
inputRange.max = maxValue;

// listen for unlock
function unlockStartHandler() {
    // clear raf if trying again
    window.cancelAnimationFrame(rafID);

    // set to desired value
    currValue = +this.value;
}

function unlockEndHandler() {

    // store current value
    currValue = +this.value;

    // determine if we have reached success or not
    if(currValue >= maxValue) {
        successHandler();
    }
    else {
        rafID = window.requestAnimationFrame(animateHandler);
    }
}

// handle range animation
function animateHandler() {

    // calculate gradient transition
    var transX = currValue - maxValue;

    // update input range
    inputRange.value = currValue;

    //Change slide thumb color on mouse up
    if (currValue < 20) {
        inputRange.classList.remove('ltpurple');
    }
    if (currValue < 40) {
        inputRange.classList.remove('purple');
    }
    if (currValue < 60) {
        inputRange.classList.remove('pink');
    }

    // determine if we need to continue
    if(currValue > -1) {
        window.requestAnimationFrame(animateHandler);
    }

    // decrement value
    currValue = currValue - speed;
}

// handle successful unlock
function successHandler() {
    alert('Unlocked');
};

// bind events
inputRange.addEventListener('mousedown', unlockStartHandler, false);
inputRange.addEventListener('mousestart', unlockStartHandler, false);
inputRange.addEventListener('mouseup', unlockEndHandler, false);
inputRange.addEventListener('touchend', unlockEndHandler, false);

// move gradient
inputRange.addEventListener('input', function() {
    //Change slide thumb color on way up
    if (this.value > 20) {
        inputRange.classList.add('ltpurple');
    }
    if (this.value > 40) {
        inputRange.classList.add('purple');
    }
    if (this.value > 60) {
        inputRange.classList.add('pink');
    }

    //Change slide thumb color on way down
    if (this.value < 20) {
        inputRange.classList.remove('ltpurple');
    }
    if (this.value < 40) {
        inputRange.classList.remove('purple');
    }
    if (this.value < 60) {
        inputRange.classList.remove('pink');
    }
});