const inputRed = document.getElementById('rojo');
const inputBlue = document.getElementById('azul');
const inputGreen = document.getElementById('verde');

const textRed = document.getElementById('text-red');
const textBlue = document.getElementById('text-blue');
const textGreen = document.getElementById('text-green');

let color = [inputRed.value, inputGreen.value, inputBlue.value ];

actualizarTexto();
function actualizarTexto() {
    textRed.innerHTML = inputRed.value;
    textBlue.innerHTML = inputBlue.value;
    textGreen.innerHTML = inputGreen.value;
}
const actualizarColor = () => {
    color=[inputRed.value, inputGreen.value, inputBlue.value ];
    document.querySelector("#selected-color").style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
}
window.addEventListener('mousemove', () => {
    actualizarTexto();
    actualizarColor()
})