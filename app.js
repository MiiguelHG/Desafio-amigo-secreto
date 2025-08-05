// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
let anterior = 0;

const amigo = document.getElementById('amigo');
const error = document.getElementById('error');
const errorSorte = document.getElementById('errorSorte');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const tablaAmigos = document.getElementById('tablaAmigos');
const miTabla = document.getElementById('miTabla');

function agregarAmigo() {
    errorSorte.style.display = 'none';

    if (amigo.value.trim() === '') {
        error.innerHTML = 'Por favor, inserte un nombre.';
        error.style.display = 'block';
    } else if ( !nombreValido.test(amigo.value) ){
        error.innerHTML = 'Por favor, ingresa un nombre VALIDO.';
        error.style.display = 'block';
    } else if (amigos.includes(amigo.value)) {
        error.innerHTML = 'El nombre ya está en la lista.';
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
        // contenido += `<li>${amigo}</li>`;
        contenido += `
        <tr>
            <td>${amigo}</td>
            <td>
                <button class="button-eliminar" onclick="eliminarAmigo('${amigo}');">Eliminar</button>
            </td>
        </tr>
        `;
    });

    // listaAmigos.innerHTML = contenido;
    tablaAmigos.innerHTML = contenido;

    mostrarTabla();
}

function eliminarAmigo(eliminar) {
    amigos.forEach((amigo, index) => {
        if (amigo === eliminar) {
            amigos.splice(index, 1);
        }
    })
    mostrarTabla();
    listarAmigos();
}

function generarAleatorio() {
    let aleatorio =  Math.floor(Math.random() * amigos.length);
    if (aleatorio == anterior) return generarAleatorio()

    anterior = aleatorio;
    return aleatorio;
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
 function limpiarLista() {
    amigos = [];
    errorSorte.style.display = 'none';
    resultado.innerHTML = '';
    listarAmigos();
 }

 function mostrarTabla() {
    (amigos.length > 0) ? miTabla.style.display = 'block' : miTabla.style.display = 'none';
 }
