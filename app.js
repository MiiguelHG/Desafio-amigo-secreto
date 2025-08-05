// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const amigo = document.getElementById('amigo');
const error = document.getElementById('error');
const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

function agregarAmigo() {
    if (amigo.value.trim() === '') {
        error.innerHTML = 'Por favor, inserte un nombre.';
        error.style.display = 'block';
    } else if ( !nombreValido.test(amigo.value) ){
        error.innerHTML = 'Por favor, ingresa un nombre VALIDO.';
        error.style.display = 'block';
    } else {
        amigos.push(amigo.value);
        error.style.display = 'none';
    }

    limpiarCampo();

    console.log(amigos)
}

function limpiarCampo() {
    amigo.value = '';
}