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
                if (!sound2.volume === 0) {
                    clearInterval(slimFady2);
                }
                if(sound2.volume>=0.1)
                    sound2.volume = sound2.volume - 0.05;
                else
                    sound2.volume= 0;
            }, 30);

        if (!sound2.volume === 0) {
            sound2.pause();
        }
    }
    else {
            var slimFady3 = setInterval(function () {
                if (!sound3.volume > 0) {
                    clearInterval(slimFady3);
                }
                if(sound3.volume>=0.1)
                    sound3.volume = sound3.volume - 0.05;
                else
                    sound3.volume = 0;
            }, 30);

        if (!sound3.volume === 0) {
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