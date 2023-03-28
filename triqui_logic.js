const cuadrado = document.querySelectorAll(".cuadrado")
          let jugadorActual = 'X';
          const jugadores = ['X', 'O']
          cuadrado.forEach(cuadrado => {
               cuadrado.addEventListener('click', () => {
                    if (cuadrado.textContent === '') {
                         cuadrado.textContent = jugadorActual;
                         cuadrado.setAttribute('jugador-data', jugadorActual);
                         jugadorActual = jugadorActual === jugadores[0] ? jugadores[1] : jugadores[0];
                    }
               });
          });
const botonReseteo = document.querySelector('#reinicio-btn')
botonReseteo.addEventListener('click', () => {
        cuadrado.forEach(cuadrado =>{
            cuadrado.textContent = '';
            cuadrado.removeAttribute('jugador-data');
        });
        jugadorActual = 'X';
});