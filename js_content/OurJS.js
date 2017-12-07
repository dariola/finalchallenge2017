/*var audio = [];

audio[0]=new Audio();
audio[0].src="../sounds/office_sound.mp3";

audio[1]= new Audio();
audio[1].src="../sounds/ocean_ambient.mp3";

audio[2]= new Audio();
audio[3].src="../sounds/tibe_ambient.mp3" ;

function playClip(){

    if($('.item').eq(0).hasClass('active')){
        audio[0].play();
    }

}



function playClip() {


    var sound1 = document.getElementById('ambient_sounds0');
    var sound2 = document.getElementById('ambient_sounds1');
    var sound3 = document.getElementById('ambient_sounds2');


    var sounds_all = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        sounds_all[i].pause();
    }

    var active =


    switch (active){
        case "1":
            sound1.play();
            break;
        case "2":
            sound2.play();
            break;
        case "3":
            sound3.play();
            break;
        default:
            sound3.play();
    }

}

function playClip2(){

    var sound1 = document.getElementById('ambient_sounds0');
    var sound2 = document.getElementById('ambient_sounds1');
    var sound3 = document.getElementById('ambient_sounds2');

    if($('.item').eq(0).hasClass('active')){
        sound1.play();
    }else if ($('.item').eq(1).hasClass('active')){
        sound2.play();
    }
    else
        sound3.play();
}


$('.carousel-control').on("mouseover", function () {
    var sound = document.getElementById('ambient_sounds0');
    sound.play()
});
*/



function playSound(whichone) {

    var sound1 = document.getElementById('ambient_sounds1');
    var sound2 = document.getElementById('ambient_sounds2');
    var sound3 = document.getElementById('ambient_sounds3');

    switch (whichone){
        case 1:
            sound1.play();
            break;
        case 2:
            sound2.play();
            break;
        case 3:
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
            sound1.pause();
            break;
        case 2:
            sound2.pause();
            break;
        case 3:
            sound3.pause();
            break;
        default:
            sound3.pause();
    }

}

