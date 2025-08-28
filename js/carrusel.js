document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtén todos los elementos del carrusel
    const carruselImagenes = document.querySelector('.carrusel-imagenes');
    const prevBtn = document.querySelector('.carrusel-btn.prev');
    const nextBtn = document.querySelector('.carrusel-btn.next');
    const puntosContenedor = document.querySelector('.carrusel-puntos');
    const puntos = document.querySelectorAll('.punto');

    let currentIndex = 0; // El índice de la imagen actual

    // 2. Función para actualizar la imagen visible
    function actualizarCarrusel() {
        const offset = -currentIndex * 100;
        carruselImagenes.style.transform = `translateX(${offset}%)`;
        
        // 3. Actualiza los puntos de navegación
        puntos.forEach(punto => punto.classList.remove('activo'));
        puntos[currentIndex].classList.add('activo');
    }

    // 4. Lógica para los botones "Anterior" y "Siguiente"
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : puntos.length - 1;
        actualizarCarrusel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < puntos.length - 1) ? currentIndex + 1 : 0;
        actualizarCarrusel();
    });

    // 5. Lógica para los puntos de navegación
    puntos.forEach((punto, index) => {
        punto.addEventListener('click', () => {
            currentIndex = index;
            actualizarCarrusel();
        });
    });

    // Opcional: Carrusel automático
    setInterval(() => {
        currentIndex = (currentIndex < puntos.length - 1) ? currentIndex + 1 : 0;
        actualizarCarrusel();
    }, 5000); // Cambia de imagen cada 5 segundos
});