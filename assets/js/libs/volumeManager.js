const volumeManager = () => {
    audio.volume = 0.5;
    volumeDown.addEventListener("click",()=>{
        console.log(audio.volume);        
        if(audio.volume < 0){
            audio.volume = 0;
        }else{
            audio.volume -= 0.05;
            // est = audio.volume = audio.volume - 0.05;
        }
    })
    volumeUp.addEventListener("click",()=>{
        console.log(audio.volume);
        if(audio.volume >= 1){
            audio.volume = 0;
        }else{
            audio.volume += 0.05;
        }
        
    })    
}
export {
    volumeManager
};