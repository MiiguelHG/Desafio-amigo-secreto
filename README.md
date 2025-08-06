# 🎁 Amigo Secreto

<p align="center">
  <img src="assets/amigo-secreto.png" alt="Demo Amigo Secreto" width="350"/>
</p>

¡Organiza tu sorteo de <b>Amigo Secreto</b> de forma fácil, divertida y visual! Esta aplicación web interactiva te permite ingresar nombres, evitar duplicados, eliminar participantes, realizar el sorteo y mostrar el resultado de manera sencilla. 
# Amigo Secreto

Este proyecto es una aplicación web interactiva para organizar sorteos de "Amigo Secreto" entre un grupo de amigos. Permite ingresar nombres, evitar duplicados, eliminar participantes, realizar el sorteo y mostrar el resultado de manera sencilla y visual.


## 📑 Tabla de Contenido

1. [Características](#características)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Pasos para Usar la Aplicación](#pasos-para-usar-la-aplicación)
5. [Funcionalidad del Código](#funcionalidad-del-código)

---

## ✨ Características

| 🚀 Característica                                    | Descripción                                                                 |
|------------------------------------------------------|-----------------------------------------------------------------------------|
| ✅ Validación de nombres                             | Solo nombres válidos (mínimo 3 letras, sin números, sin duplicados)         |
| 📋 Lista dinámica                                    | Visualización y gestión de amigos en una tabla interactiva                  |
| 🗑️ Eliminar participantes                            | Elimina fácilmente cualquier amigo de la lista                              |
| 👀 Tabla oculta                                      | La tabla desaparece si no hay participantes                                 |
| 🎲 Sorteo aleatorio                                 | Selecciona un amigo secreto al azar, sin repetir el último                  |
| ⚠️ Mensajes de error claros                          | Para entradas inválidas o acciones no permitidas                            |
| 💻 Interfaz moderna y responsiva                     | Diseño atractivo y adaptable a cualquier dispositivo                        |


## 🛠️ Tecnologías Utilizadas

- <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5"/> HTML5
- <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3"/> CSS3
- <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript"/> JavaScript (Vanilla)


## 🗂️ Estructura del Proyecto

```text
├── app.js           # 📜 Lógica principal de la aplicación
├── index.html       # 🏗️  Estructura HTML de la interfaz
├── style.css        # 🎨 Estilos personalizados
└── assets/          # 🖼️  Imágenes y recursos gráficos
    ├── amigo-secreto.png
    └── play_circle_outline.png
```


## 📝 Pasos para Usar la Aplicación

<ol>
  <li>✍️ <b>Ingresa</b> los nombres de los participantes y haz clic en <b>"Añadir"</b>.</li>
  <li>🗑️ <b>Elimina</b> participantes con el botón <b>"Eliminar"</b> junto a su nombre.</li>
  <li>🎲 <b>Haz clic</b> en <b>"Sortear amigo"</b> para ver el resultado.</li>
  <li>🧹 <b>Limpia</b> la lista en cualquier momento con el botón <b>"Limpiar lista"</b>.</li>
</ol>


## 🧩 Funcionalidad del Código

<ul>
  <li><b>📝 Validación de nombres:</b> Solo se aceptan nombres con más de 2 letras, sin números ni caracteres especiales, y no se permiten duplicados.</li>
  <li><b>📋 Gestión de la lista:</b> Los nombres se muestran en una tabla. Puedes eliminar cualquier participante y la tabla se oculta automáticamente si la lista queda vacía.</li>
  <li><b>🎲 Sorteo aleatorio:</b> Al presionar <b>"Sortear amigo"</b>, se selecciona un participante al azar, evitando repetir el último sorteado.</li>
  <li><b>⚠️ Mensajes de error:</b> Se muestran mensajes claros si el campo está vacío, el nombre es inválido, ya existe en la lista o si intentas sortear sin participantes.</li>
</ul>


---

<p align="center">
  <b>¡Disfruta organizando tu Amigo Secreto de forma fácil, divertida y visual! 🎉</b>
</p>
