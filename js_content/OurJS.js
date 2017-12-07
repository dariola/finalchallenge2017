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