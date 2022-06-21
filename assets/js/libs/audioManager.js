// rotation du CD
let angle = 0;
let interval;
const play = () => {
    audio.play();
    document.querySelector(".playPause img").src = "./assets/img/pause.jpg";

    let img = document.querySelector(".slider");

    if (audio.play) {
        console.log(audio.play);
       interval = setInterval(function () {
            img.style.transform = "rotateZ(" + angle++ + "deg)";
        }, 30);
    }
}
    // bouton play - pause
    const pause = () => {
        audio.pause();
        document.querySelector(".playPause img").src = "./assets/img/play.jpg";
        
     if (audio.pause) {
        console.log(audio.pause);
        clearInterval(interval);
    }
}
const audioManager = () => {
    playPause.addEventListener("click", () => {
        if (audio.paused) {
            play();
        } else {
            pause();
        }
    });
    // bouton next
    next.addEventListener("click", () => {
        pause();
        console.log(currentTrack);
        audio = new Audio(playlist[currentTrack].mp3);
        play();
    })
    // bouton prev
    prev.addEventListener("click", () => {
        pause();
        console.log(currentTrack);
        audio = new Audio(playlist[currentTrack].mp3);
        play();
    })
    // tactile
    hammerSlide.get('swipe').set({
        direction: Hammer.DIRECTION_HORIZONTAL
    });
    hammerSlide.on("swipeleft swiperight"),
        function (ev) {
            console.log(ev.type + " gesture detected.");
            if (ev.type === "swipeleft") {
                pause();
                console.log(currentTrack);
                audio = new Audio(playlist[currentTrack].mp3);
                play();
            } 
            if (ev.type === "swiperight") {
                pause();
                console.log(currentTrack);
                audio = new Audio(playlist[currentTrack].mp3);
                play();
            }
        }
}
export {
    play,
    pause,
    audioManager
};