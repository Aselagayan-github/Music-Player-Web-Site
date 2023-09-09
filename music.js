
var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");
icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src="pause logo-modified.png";

    }else{
        mysong.pause();
        icon.src="play-modified.png";

    }
}

