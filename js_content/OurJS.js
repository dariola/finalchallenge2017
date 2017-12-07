
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
                    sound1.volume = sound1.volume - 0.09;
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
                    sound2.volume = sound2.volume - 0.09;
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
                    sound3.volume = sound3.volume - 0.09;
                else
                    sound3.volume = 0;
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
                clearInterval(slimFady7);
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

    else if (whichone === 8) {
        var slimFady8 = setInterval(function () {
            if (sound8.volume === 0) {
                clearInterval(slimFady8);
            }
            if(sound8.volume>=0.1)
                sound8.volume = sound8.volume - 0.05;
            else
                sound8.volume= 0;
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
function changeVol(howMuch, whichOne) {
    var mus1 = document.getElementById("dropM");
    var pic1 = document.getElementById("drop1");
    var mus2 = document.getElementById("thunderM");
    var pic2 = document.getElementById("thunder1");
    var mus3 = document.getElementById("windM");
    var pic3 = document.getElementById("wind1");
    var mus4 = document.getElementById("waveM");
    var pic4 = document.getElementById("wave1");
    var mus5 = document.getElementById("fireM");
    var pic5 = document.getElementById("fire1");
    var mus6 = document.getElementById("birdM");
    var pic6 = document.getElementById("bird1");
    var mus7 = document.getElementById("cricketM");
    var pic7 = document.getElementById("cricket1");
    var mus8 = document.getElementById("coffeeM");
    var pic8 = document.getElementById("coffee1");

    switch(whichOne){
        case 1:
            mus1.volume = howMuch/100;
            if(pic1.getAttribute('src') !== "../css_content/img/drop%20w.png") {
                if (pic1.style.opacity !== undefined) {
                    if (howMuch / 100 > 0.2)
                        pic1.style.opacity = howMuch / 100;
                    console.log(pic1.style.opacity);
                }
            }
            break;

        case 2:
            mus2.volume = howMuch/100;
            if(pic2.getAttribute('src') !== "../css_content/img/thunder%20w.png") {
                if (pic2.style.opacity !== undefined) {
                    if (howMuch / 100 > 0.2)
                        pic2.style.opacity = howMuch / 100;
                    console.log(pic2.style.opacity);
                }
            }
            break;

        case 3:
            mus3volume = howMuch/100;
            if(pic3.getAttribute('src') !== "../css_content/img/wind%20w.png") {
                if (pic3.style.opacity !== undefined) {
                    if (howMuch / 100 > 0.2)
                        pic3.style.opacity = howMuch / 100;
                    console.log(pic3.style.opacity);
                }
            }
            break;
        case 4:
            mus4.volume = howMuch/100;
            if(pic4.getAttribute('src') !== "../css_content/img/wave%20w.png") {
                if (pic4.style.opacity !== undefined) {
                    if (howMuch / 100 > 0.2)
                        pic4.style.opacity = howMuch / 100;
                    console.log(pic4.style.opacity);
                }
            }
            break;
        case 5:
            mus5.volume = howMuch/100;
            if(pic5.getAttribute('src') !== "../css_content/img/fire%20w.png") {
                if (pic5.style.opacity !== undefined) {
                    if (howMuch / 100 > 0.2)
                        pic5.style.opacity = howMuch / 100;
                    console.log(pic5.style.opacity);
                }
            }
            break;


        case 6:
            mus6.volume = howMuch/100;
            if(pic6.getAttribute('src') !== "../css_content/img/bird%20w.png") {
                if (pic6.style.opacity !== undefined) {
                    if (howMuch / 100 > 0.2)
                        pic6.style.opacity = howMuch / 100;
                    console.log(pic6.style.opacity);
                }
            }
            break;

        case 7:
            mus7.volume = howMuch/100;
            if(pic7.getAttribute('src') !== "../css_content/img/cricket%20w.png") {
                if (pic7.style.opacity !== undefined) {
                    if (howMuch / 100 > 0.2)
                        pic7.style.opacity = howMuch / 100;
                    console.log(pic.style.opacity);
                }
            }
            break;

        case 8:
            mus8.volume = howMuch/100;
            if(pic8.getAttribute('src') !== "../css_content/img/coffee%20w.png") {
                if (pic8.style.opacity !== undefined) {
                    if (howMuch / 100 > 0.2)
                        pic8.style.opacity = howMuch / 100;
                    console.log(pic8.style.opacity);
                }
            }
            break;
    }


}

function picChange(whichone) {

    var array1 = document.querySelectorAll('[class="range blue"]');

    switch(whichone){
        case 1:
            var dropy = document.getElementById("drop1");
            var rain = document.getElementById("dropM");
            rain.volume = array1[0].getAttribute('value')/-100;
            if (dropy.getAttribute('src') == "../css_content/img/drop%20w.png")
            {
                dropy.src = "../css_content/img/drop.png";
                rain.play();
            }
            else
            {
                dropy.src = "../css_content/img/drop%20w.png";
                dropy.style.opacity = 1;
                rain.pause();
            }
            break;

        case 2:
            var thundry = document.getElementById("thunder1");
            var thunder = document.getElementById("thunderM");
            thunder.volume = array1[1].getAttribute('value')/100;
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
            wind.volume = array1[1].getAttribute('value')/100;
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
            waves.volume = array1[1].getAttribute('value')/100;
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
            fire.volume = array1[1].getAttribute('value')/100;
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
            bird.volume = array1[1].getAttribute('value')/100;
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
            cricket.volume = array1[1].getAttribute('value')/100;
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
            cof.volume = array1[1].getAttribute('value')/100;
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

function ButtonSwap() {
    var garbage = document.getElementById("garbage");
    if (garbage.getAttribute('src') == "../css_content/img/garbage.png") {
        garbage.src = "../css_content/img/return.png";

    }
    else {
        garbage.src = "../css_content/img/garbage.png";
    }
}