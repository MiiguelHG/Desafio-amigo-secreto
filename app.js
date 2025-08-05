// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

const amigo = document.getElementById('amigo');
const error = document.getElementById('error');
const errorSorte = document.getElementById('errorSorte');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo() {
    errorSorte.style.display = 'none';

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
}

function limpiarCampo() {
    amigo.value = '';
}

function listarAmigos() {
    let contenido = '';

    amigos.forEach((amigo) => {
        contenido += `<li>${amigo}</li>`;
    });

    listaAmigos.innerHTML = contenido;
}

function generarAleatorio() {
    return Math.floor(Math.random() * amigos.length)
}

function sortearAmigo() {
    if (amigos.length === 0) {
        errorSorte.innerHTML = 'No hay amigos en la lista';
        errorSorte.style.display = 'block';
    } else {
        errorSorte.style.display = 'none';
        resultado.innerHTML = amigos[generarAleatorio()];  
    } 
}
