var audio = [];

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