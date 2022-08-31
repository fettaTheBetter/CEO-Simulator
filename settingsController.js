function changeMusic(){
    let audioElement = document.getElementById("musicSettings");
    let pictureElement = document.getElementById('musicImage');
    audioElement.volume = 0.2;
    //if it is paused
    if(audioElement.paused){
        //then unpause
        pictureElement.src = "https://office-mayhem.s3.us-east-2.amazonaws.com/MusicNoteTrans.png";
        audioElement.play();
    }
    //if it isn't paused
    else{
        pictureElement.src = "https://office-mayhem.s3.us-east-2.amazonaws.com/MusicNoteCrossedTrans.png";
        audioElement.pause();
    }
}