const infoManager = () => {
    setInterval(()=>{
        const title = document.querySelector(".title");
        const info = document.querySelector(".info");

        title.innerHTML = playlist[currentTrack].track+" - "
            +playlist[currentTrack].title+" - "
            +playlist[currentTrack].artist;
            
        
        info.innerHTML = playlist[currentTrack].album+" - "
            +playlist[currentTrack].annee+" - "
            +playlist[currentTrack].genre+" - "
            +playlist[currentTrack].description;
    })

}
export {
    infoManager
};