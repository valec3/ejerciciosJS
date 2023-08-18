// import {citas} from './citas.js';

const btnResetCita = document.querySelector('#btnResetCita');
const citaP = document.querySelector('.cita');
const autorCitaP = document.querySelector('.autor');

function generateCita(){
    let numeroAleatorio = Math.floor(Math.random() * citas.length);
    citaP.innerText = citas[numeroAleatorio].texto;
    autorCitaP.innerText = citas[numeroAleatorio].autor;
}
generateCita()

btnResetCita.addEventListener('click', generateCita)