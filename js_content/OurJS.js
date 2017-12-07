
//START OF SOUND OF VORSTELLUNGSSEITE

function playSound(whichone) {

    var sound1 = document.getElementById('ambient_sounds1');
    var sound2 = document.getElementById('ambient_sounds2');
    var sound3 = document.getElementById('ambient_sounds3');
    var sound4 = document.getElementById('ambient_sounds4');
    var sound5 = document.getElementById('ambient_sounds5');
    var sound6 = document.getElementById('ambient_sounds6');
    var sound7 = document.getElementById('ambient_sounds7');
    var sound8 = document.getElementById('ambient_sounds8');


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
        case 4:
            sound4.volume=1;
            sound4.play();
            break;
        case 5:
            sound5.volume=1;
            sound5.play();
            break;
        case 6:
            sound6.volume=1;
            sound6.play();
            break;
        case 7:
            sound7.volume=1;
            sound7.play();
            break;
        case 8:
            sound8.volume=1;
            sound8.play();
            break;
        default:
            sound8.play();
    }

}

function stopSound(whichone) {
    var sound1 = document.getElementById('ambient_sounds1');
    var sound2 = document.getElementById('ambient_sounds2');
    var sound3 = document.getElementById('ambient_sounds3');
    var sound4 = document.getElementById('ambient_sounds4');
    var sound5 = document.getElementById('ambient_sounds5');
    var sound6 = document.getElementById('ambient_sounds6');
    var sound7 = document.getElementById('ambient_sounds7');
    var sound8 = document.getElementById('ambient_sounds8');

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

    else if (whichone === 3) {
        var slimFady3 = setInterval(function () {
            if (sound3.volume === 0) {
                clearInterval(slimFady3);
            }
            if(sound3.volume>=0.1)
                sound3.volume = sound3.volume - 0.05;
            else
                sound3.volume= 0;
        }, 30);

        if (sound3.volume === 0) {
            sound3.pause();
        }
    }

    else if (whichone === 4) {
        var slimFady4 = setInterval(function () {
            if (sound4.volume === 0) {
                clearInterval(slimFady4);
            }
            if(sound4.volume>=0.1)
                sound4.volume = sound4.volume - 0.05;
            else
                sound4.volume= 0;
        }, 30);

        if (sound4.volume === 0) {
            sound4.pause();
        }
    }


    else if (whichone === 5) {
        var slimFady5 = setInterval(function () {
            if (sound5.volume === 0) {
                clearInterval(slimFady5);
            }
            if(sound5.volume>=0.1)
                sound5.volume = sound5.volume - 0.05;
            else
                sound5.volume= 0;
        }, 30);

        if (sound5.volume === 0) {
            sound5.pause();
        }
    }

    else if (whichone === 6) {
        var slimFady6 = setInterval(function () {
            if (sound6.volume === 0) {
                clearInterval(slimFady6);
            }
            if(sound6.volume>=0.1)
                sound6.volume = sound6.volume - 0.05;
            else
                sound6.volume= 0;
        }, 30);

        if (sound6.volume === 0) {
            sound6.pause();
        }
    }

    else if (whichone === 7) {
        var slimFady7 = setInterval(function () {
            if (sound7.volume === 0) {
                clearInterval(slimFady6);
            }
            if(sound7.volume>=0.1)
                sound7.volume = sound7.volume - 0.05;
            else
                sound7.volume= 0;
        }, 30);

        if (sound7.volume === 0) {
            sound7.pause();
        }
    }
    else {
            var slimFady8 = setInterval(function () {
                if (sound8.volume === 0) {
                    clearInterval(slimFady8);
                }
                if(sound8.volume>=0.1)
                    sound8.volume = sound8.volume - 0.05;
                else
                    sound8.volume = 0;
            }, 30);

        if (sound8.volume === 0) {
            sound8.pause();
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
            var rain = document.getElementById("dropM");
            if (dropy.getAttribute('src') == "../css_content/img/drop%20w.png")
            {
                dropy.src = "../css_content/img/drop.png";
                rain.play();
            }
            else
            {
                dropy.src = "../css_content/img/drop%20w.png";
                rain.pause();
            }
            break;

        case 2:
            var thundry = document.getElementById("thunder1");
            var thunder = document.getElementById("thunderM");
            if (thundry.getAttribute('src') == "../css_content/img/thunder%20w.png")
            {
                thundry.src = "../css_content/img/thunder.png";
                thunder.play();
            }
            else
            {
                thundry.src = "../css_content/img/thunder%20w.png";
                thunder.pause();
            }
            break;

        case 3:
            var windy = document.getElementById("wind1");
            var wind = document.getElementById("windM");
            if (windy.getAttribute('src') == "../css_content/img/wind%20w.png")
            {
                windy.src = "../css_content/img/wind.png";
                wind.play();
            }
            else
            {
                windy.src = "../css_content/img/wind%20w.png";
                wind.pause();
            }
            break;

        case 4:
            var wavy = document.getElementById("wave1");
            var waves = document.getElementById("waveM");
            if (wavy.getAttribute('src') == "../css_content/img/wave%20w.png")
            {
                wavy.src = "../css_content/img/wave.png";
                waves.play()
            }
            else
            {
                wavy.src = "../css_content/img/wave%20w.png";
                waves.pause();
            }
            break;

        case 5:
            var firy = document.getElementById("fire1");
            var fire = document.getElementById("fireM");
            if (firy.getAttribute('src') == "../css_content/img/fire%20w.png")
            {
                firy.src = "../css_content/img/fire.png";
                fire.play();
            }
            else
            {
                firy.src = "../css_content/img/fire%20w.png";
                fire.pause();
            }
            break;

        case 6:
            var birdy = document.getElementById("bird1");
            var bird = document.getElementById("birdM");
            if (birdy.getAttribute('src') == "../css_content/img/bird%20w.png")
            {
                birdy.src = "../css_content/img/bird.png";
                bird.play();
            }
            else
            {
                birdy.src = "../css_content/img/bird%20w.png";
                bird.pause();
            }
            break;

        case 7:
            var cricky = document.getElementById("cricket1");
            var cricket = document.getElementById("cricketM");
            if (cricky.getAttribute('src') == "../css_content/img/cricket%20w.png")
            {
                cricky.src = "../css_content/img/cricket.png";
                cricket.play();
            }
            else
            {
                cricky.src = "../css_content/img/cricket%20w.png";
                cricket.pause();
            }
            break;

        case 8:
            var cofy = document.getElementById("coffee1");
            var cof = document.getElementById("coffeeM");
            if (cofy.getAttribute('src') == "../css_content/img/coffee%20w.png")
            {
                cofy.src = "../css_content/img/coffee.png";
                cof.play();
            }
            else
            {
                cofy.src = "../css_content/img/coffee%20w.png";
                cof.pause();
            }
            break;

    }
}