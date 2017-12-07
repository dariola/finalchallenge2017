
//START OF SOUND OF VORSTELLUNGSSEITE

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

    if (whichone === 1) {
            var slimFady = setInterval(function () {
                if (sound1.volume === 0) {
                    clearInterval(slimFady);
                    console.log(slimFady);
                }
                if(sound1.volume>=0.1)
                    sound1.volume = sound1.volume - 0.05;
                else
                    sound1.volume= 0;
            }, 30);

        if (sound1.volume === 0) {
            sound1.pause();
            console.log(slimFady);
        }

    }
    else if (whichone === 2) {
            var slimFady2 = setInterval(function () {
                if (sound2.volume === 0) {
                    clearInterval(slimFady2);
                }
                if(sound2.volume>=0.1)
                    sound2.volume = sound2.volume - 0.05;
                else
                    sound2.volume= 0;
            }, 30);

        if (sound2.volume === 0) {
            sound2.pause();
        }
    }
    else {
            var slimFady3 = setInterval(function () {
                if (sound3.volume === 0) {
                    clearInterval(slimFady3);
                }
                if(sound3.volume>=0.1)
                    sound3.volume = sound3.volume - 0.05;
                else
                    sound3.volume = 0;
            }, 30);

        if (sound3.volume === 0) {
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

//END OF SOUNDS OF VORSTELLUNGSSEITE

//START OF RANGESLIDER:

var inputRange = document.getElementsByClassName('range')[0],
    maxValue = 1, // the higher the smoother when dragging
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
}

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

function picChange(whichone) {


    switch(whichone){
        case 1:
            var dropy = document.getElementById("drop1");
            if (dropy.getAttribute('src') == "../css_content/img/drop%20w.png")
            {
                dropy.src = "../css_content/img/drop.png";
                var fire = "../sounds/regen_ambient.mp3";
                fire.play();
                fire.volume=0.5;
            }
            else
            {
                dropy.src = "../css_content/img/drop%20w.png";
            }
            break;

        case 2:
            var thundry = document.getElementById("thunder1");
            if (thundry.getAttribute('src') == "../css_content/img/thunder%20w.png")
            {
                thundry.src = "../css_content/img/thunder.png";
                activateGo(thundry);
            }
            else
            {
                thundry.src = "../css_content/img/thunder%20w.png";
            }
            break;

        case 3:
            var windy = document.getElementById("wind1");
            if (windy.getAttribute('src') == "../css_content/img/wind%20w.png")
            {
                windy.src = "../css_content/img/wind.png";
                activateGo(windy);
            }
            else
            {
                windy.src = "../css_content/img/wind%20w.png";
            }
            break;

        case 4:
            var wavy = document.getElementById("wave1");
            if (wavy.getAttribute('src') == "../css_content/img/wave%20w.png")
            {
                wavy.src = "../css_content/img/wave.png";
                activateGo(wavy);
            }
            else
            {
                wavy.src = "../css_content/img/wave%20w.png";
            }
            break;

        case 5:
            var firy = document.getElementById("fire1");
            if (firy.getAttribute('src') == "../css_content/img/fire%20w.png")
            {
                firy.src = "../css_content/img/fire.png";
                activateGo(firy);
            }
            else
            {
                firy.src = "../css_content/img/fire%20w.png";
            }
            break;

        case 6:
            var birdy = document.getElementById("bird1");
            if (birdy.getAttribute('src') == "../css_content/img/bird%20w.png")
            {
                birdy.src = "../css_content/img/bird.png";
                activateGo(birdy);
            }
            else
            {
                birdy.src = "../css_content/img/bird%20w.png";
            }
            break;

        case 7:
            var cricky = document.getElementById("cricket1");
            if (cricky.getAttribute('src') == "../css_content/img/cricket%20w.png")
            {
                cricky.src = "../css_content/img/cricket.png";
                activateGo(cricky);
            }
            else
            {
                cricky.src = "../css_content/img/cricket%20w.png";
            }
            break;

        case 8:
            var cofy = document.getElementById("coffee1")
            if (cofy.getAttribute('src') == "../css_content/img/coffee%20w.png")
            {
                cofy.src = "../css_content/img/coffee.png";
                activateGo(cofy);
            }
            else
            {
                cofy.src = "../css_content/img/coffee%20w.png";
            }
            break;

    }
}

function activateGo(pic){
    var picpath = pic.getAttribute('src');
    switch (picpath){
        case "../css_content/img/drop%20w.png":
            var drop = "../sounds/regen_ambient.mp3";
            drop.play();
            drop.volume=0.5;
            break;
        case "../css_content/img/thunder%20w.png":
            var storm = "../sounds/storm_ambient.mp3";
            storm.play();
            storm.volume=0.5;
            break;
        case "../css_content/img/wind%20w.png":
            var wind = "../sounds/wind_ambient.mp3";
            wind.play();
            wind.volume=0.5;
            break;
        case "../css_content/img/wave%20w.png":
            var wave = "../sounds/ocean_ambient.mp3";
            wave.play();
            wave.volume=0.5;
            break;
        case "../css_content/img/fire%20w.png":
            var fire = "../sounds/regen_ambient.mp3";
            fire.play();
            fire.volume=0.5;
            break;
        case "../css_content/img/bird%20w.png":
            var bird = "../sounds/regen_ambient.mp3";
            bird.play();
            bird.volume=0.5;
            break;
        case "../css_content/img/cricket%20w.png":
            var cricket = "../sounds/regen_ambient.mp3";
            cricket.play();
            cricket.volume=0.5;
            break;
        case "../css_content/img/coffee%20w.png":
            var coffee = "../sounds/regen_ambient.mp3";
            coffee.play();
            coffee.volume=0.5;
            break;
    }
}