// importation
import {playlist} from "./libs/playlist.js";
import {slider} from "./libs/slider.js";
import {play,pause,audioManager} from "./libs/audioManager.js";
import {volumeManager} from "./libs/volumeManager.js";
import {timeManager} from "./libs/timeManager.js";
import {infoManager} from "./libs/infoManager.js";


// déclaration de variable
let currentTrack = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const playPause = document.querySelector(".playPause");
const volumeUp = document.querySelector(".volumeUp");
const volumeDown = document.querySelector(".volumeDown");
const time = document.querySelector(".time");
const sliderDiv = document.querySelector(".slider");
const hammerSlide = new Hammer(sliderDiv);
hammerSlide.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
hammerSlide.on("swipeleft swiperight", function(ev) {
    console.log(ev.type +" gesture detected."); 
});
 
// variables à partager entre les différents module 
// doivent devenir global -> globalThis
globalThis.playlist = playlist;
globalThis.currentTrack = currentTrack;
globalThis.prev = prev;
globalThis.next = next;
globalThis.playPause = playPause;
globalThis.volumeUp = volumeUp;
globalThis.volumeDown = volumeDown;
globalThis.time = time;
globalThis.infoManager = infoManager;
globalThis.sliderDiv = sliderDiv;
globalThis.hammerSlide = hammerSlide;

// objet audio
let  audio = new Audio(playlist[currentTrack].mp3);
globalThis.audio = audio;


// slider
slider();
// audio
audioManager();
// volume
volumeManager();
// défilement du temps
timeManager();
// info sur le titre en court
infoManager();



