
//Objeto que contiene la musica del juego en las distintas instancias
function Music(audioCentral, gameOver, ganador, activo) {
    this.audioCentral = audioCentral,
    this.gameOver = gameOver,
    this.ganador = ganador,
    this.activo = activo
}

Music.prototype.reproducirAudio = function (estado){
    estado.play();
}

Music.prototype.pararAudio = function (estado) {
    estado.pause();
}

var musica = new Music (document.getElementById("audioCentral"),document.getElementById("audioGameOver"),document.getElementById("audioGanador"),1);


