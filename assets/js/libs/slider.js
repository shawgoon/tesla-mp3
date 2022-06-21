const sliderTransition = (currentTrack) => {
    sliderImgNext.src = playlist[currentTrack].cover;
    sliderImgOrigin.style.opacity = 0;
    // attendre .4s, changer le src de l'img originale 
    // et remettre l'opacité à 1
    setTimeout(() => {
        // effectuer mes actions
        sliderImgOrigin.scr = playlist[currentTrack].cover;
        sliderImgOrigin.style.opacity = 1;
    }, 400)
}
const slider = () => {
    // au démarage de l'apply
    const sliderImgOrigin = document.createElement("img");
    globalThis.sliderImgOrigin = sliderImgOrigin;
    const sliderDiv = document.querySelector(".slider");
    sliderDiv.append(sliderImgOrigin);
    sliderDiv.style.position = "relative";
    sliderImgOrigin.style.position = "absolute";
    sliderImgOrigin.style.transition = "all .8s";

    sliderImgOrigin.src = playlist[currentTrack].cover;
    const sliderImgNext = document.createElement("img");
    globalThis.sliderImgNext = sliderImgNext;
    sliderDiv.prepend(sliderImgNext);
    sliderImgNext.src = playlist[currentTrack].cover;

    next.addEventListener(
        "click",
        function () {
            // console.log(currentTrack);
            // 3 limiter index à la taille du tableau
            if (currentTrack === playlist.length - 1) {
                currentTrack = 0;
                sliderTransition(currentTrack);
                // sliderImgOrigin.ontransitionend(()=>{
                //     sliderImgOrigin.scr = playlist[currentTrack].cover;
                    // sliderImgOrigin.style.opacity = 1;
                // });
            } else {
                // 2 j'incrémente mon index
                // i = i+1 =
                currentTrack++; // incrémentation
                // je dois réaffecter src avec la nouvelle valeur de i
                sliderTransition(currentTrack);

            }
        }
    );

    prev.addEventListener(
        "click",
        function () {
            // console.log(currentTrack);
            // 3 limiter index à la taille du tableau
            if (currentTrack === 0) {
                currentTrack = playlist.length - 1;
                sliderTransition(currentTrack);

                // sliderImgOrigin.src = playlist[currentTrack].cover;
            } else {
                // 2 j'incrémente mon index
                // i = i+1 =
                currentTrack--; // incrémentation
                // je dois réaffecter src avec la nouvelle valeur de i
                // sliderImgOrigin.src = playlist[currentTrack].cover;
                sliderTransition(currentTrack);
            }
        }
    )
    // changement de plage en tactile
    hammerSlide.get('swipe').set({
        direction: Hammer.DIRECTION_HORIZONTAL
    });
    hammerSlide.on("swipeleft swiperight", function (ev) {
        if(ev.type === "swipeleft") {
            if (currentTrack === 0) {
                currentTrack = playlist.length - 1;
                sliderTransition(currentTrack);       
            } else {            
                currentTrack--;     
                sliderTransition(currentTrack);
            }
        }
        if(ev.type === "swiperight") {
            if (currentTrack === playlist.length - 1) {
                currentTrack = 0;
                sliderTransition(currentTrack);      
            } else {              
                currentTrack++;                
                sliderTransition(currentTrack);
            }
        }

    });
};
export {
    slider
};

// const sliderTransition = (currentTrack) => {
//     sliderImgNext.src = playlist[currentTrack].cover;
//     sliderImgOriginal.style.opacity = 0;
//     // attendre .4s, changer la src de l'image original
//     // et remettre l'opacité à 1
//     setTimeout(() => {
//         sliderImgOriginal.src = playlist[currentTrack].cover;
//         sliderImgOriginal.style.opacity = 1;
//     }, 400)
// }
// const slider = () => {
//     // au demarage de mon appli
//     const sliderImgOriginal = document.createElement("img");
//     globalThis.sliderImgOriginal = sliderImgOriginal
//     sliderDiv.append(sliderImgOriginal);
//     sliderDiv.style.position = "relative";
//     sliderImgOriginal.style.position = "absolute";
//     sliderImgOriginal.style.top = 0;
//     sliderImgOriginal.style.left = 0;
//     sliderImgOriginal.style.transition = "all .4s";
//     sliderImgOriginal.src = playlist[currentTrack].cover;
//     const sliderImgNext = document.createElement("img");
//     globalThis.sliderImgNext = sliderImgNext;
//     sliderImgNext.src = playlist[currentTrack].cover;
//     sliderDiv.prepend(sliderImgNext);
//     next.addEventListener(
//         "click",
//         function () {
//             console.log(currentTrack);
//             // etape 3 : limité index à la taille de mon tableau -1
//             if (currentTrack === playlist.length - 1) {
//                 currentTrack = 0;
//                 sliderTransition(currentTrack);
//             } else {
//                 // 2e etape : j'incrémente mon index
//                 //i = i+1;
//                 currentTrack++; // incrémentation
//                 // je dois réaffecter src avec la nouvelle valeur de index
//                 sliderTransition(currentTrack);
//             }
//         }
//     )
//     prev.addEventListener(
//         "click",
//         function () {

//             console.log(currentTrack);
//             // etape 3 : limité index à la taille de mon tableau -1
//             if (currentTrack === 0) {
//                 currentTrack = playlist.length - 1;
//                 sliderTransition(currentTrack);
//             } else {
//                 // 2e etape : j'incrémente mon index
//                 //i = i+1;
//                 currentTrack--; // incrémentation
//                 // je dois réaffecter src avec la nouvelle valeur de index
//                 sliderTransition(currentTrack);
//             }
//         }
//     )
// }
// export { slider }