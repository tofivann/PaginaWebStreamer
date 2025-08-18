const menuOpciones = document.getElementById("main-opciones");

const menuItems= [

    {text: "Inicio" , url: 'index.html'},
    {text: "Competitivo", url: 'competitivo.html'},
    {
    text: "Cursos", url: 'cursos.html'
    },
    {text: "Contactos", url: 'Contactos.html'}


]

menuItems.map( item =>{


    const listItem = document.createElement('li');

    const anchor = document.createElement('a');

    anchor.href = item.url;
    anchor.textContent = item.text;


    listItem.appendChild(anchor);
    menuOpciones.appendChild(listItem);
}
)

// Obtén el botón de hamburguesa y el contenedor del menú
const menuToggle = document.getElementById("menu-toggle");
const menuContainer = document.querySelector(".menu-container");

// Agrega un "escuchador de eventos" para el clic
menuToggle.addEventListener("click", () => {
    // Al hacer clic, alterna la clase 'visible' en el contenedor del menú
    menuContainer.classList.toggle("visible");
});


const textoAnimado = document.querySelector('.animacion-ola');
const texto = textoAnimado.textContent;

// Vacía el contenido del p para volver a llenarlo con las letras animadas
textoAnimado.textContent = '';
// Itera sobre cada carácter y lo envuelve en un span solo si no es un espacio
let index = 0;
texto.split('').forEach(letra => {
    if (letra !== ' ') {
        const span = document.createElement('span');
        span.textContent = letra;
        span.style.animationDelay = `${index * 0.1}s`;
        textoAnimado.appendChild(span);
        index++;
    } else {
        // Si el carácter es un espacio, crea un nodo de texto con un espacio en blanco
        const espacio = document.createTextNode(' ');
        textoAnimado.appendChild(espacio);
    }}
)
document.addEventListener('DOMContentLoaded', () => {
    const contenidoIndex = document.getElementById('contenido-index');
   

    // Añade la clase 'visible' para activar la transición
    contenidoIndex.classList.add('visible');
   
});