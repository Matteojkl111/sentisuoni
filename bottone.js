// Funzione per riprodurre l'audio
function playSound() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

// Aggiungi un event listener al bottone per eseguire la funzione quando viene cliccato
document.getElementById("playButton").addEventListener("click", playSound);
