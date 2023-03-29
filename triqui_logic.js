const cuadrado = document.querySelectorAll(".cuadrado")
          let jugadorActual = 'X';
          const jugadores = ['X', 'O']
          cuadrado.forEach(cuadrado => {
               cuadrado.addEventListener('click', () => {
                    if (cuadrado.textContent === '') {
                         cuadrado.textContent = jugadorActual;
                         cuadrado.setAttribute('jugador-data', jugadorActual);
                         valideGanador();
                         jugadorActual = jugadorActual === jugadores[0] ? jugadores[1] : jugadores[0];
                    }
               });
          });
const botonReseteo = document.querySelector('#reinicio-btn')
botonReseteo.addEventListener('click', () => {
     reseteoJuegoCompl();
});

const botonJugador = document.querySelector('#jugador-btn')
botonJugador.addEventListener('click', () =>{

});

function valideGanador(){
     const combinacionGanadores = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6],
          [0,3,6]
     ];
     for (let i = 0; i<combinacionGanadores.length; i++){
          const [a, b, c] = combinacionGanadores[i]
          const cuadradoA = cuadrado[a];
          const cuadradoB = cuadrado[b];
          const cuadradoC = cuadrado[c];

          if (
               cuadradoA.textContent === jugadorActual &&
               cuadradoB.textContent === jugadorActual &&
               cuadradoC.textContent === jugadorActual
               ){
                 const etiquetaGanador = document.querySelector("#etiqueta-ganador");
                 const etiquetaJugadorx = document.querySelector("#etiqueta-suma-x");
                 const etiquetaJugadoro = document.querySelector("#etiqueta-suma-o");
                 let sumax = 0;
                 let sumao = 0;
                 etiquetaGanador.textContent = `El ganador fue ${jugadorActual}! Felicitaciones`;
                 setTimeout(() => {
                    reseteoJuego();
                 }, 3000
                 );
               if (jugadorActual === 'X'){
                    sumax+=1000;
                    etiquetaJugadorx.textContent = `Puntaje jugador X = ${sumax}`
               } else {
                    sumao+=1000;
                    etiquetaJugadoro.textContent = `Puntaje jugador O = ${sumao}`
               }
               return; 
               }
     }
}

function reseteoJuego(){
     cuadrado.forEach(cuadrado =>{
          cuadrado.textContent = '';
          cuadrado.removeAttribute('jugador-data');
      });
      jugadorActual = 'X';
      const etiquetaGanador = document.querySelector("#etiqueta-ganador");
      etiquetaGanador.textContent = "No ha ganado nadie hasta el momento";
}
function reseteoJuegoCompl(){
     cuadrado.forEach(cuadrado =>{
          cuadrado.textContent = '';
          cuadrado.removeAttribute('jugador-data');
      });
      jugadorActual = 'X';
      const etiquetaGanador = document.querySelector("#etiqueta-ganador");
      const etiquetaJugadoro = document.querySelector('#etiqueta-suma-x');
      const etiquetaJugadorx = document.querySelector('#etiqueta-suma-o');
      etiquetaGanador.textContent = "No ha ganado nadie hasta el momento";
      etiquetaJugadoro.textContent = "Puntaje jugador X = 0";
      etiquetaJugadorx.textContent = "Puntaje jugador O = 0"
}
