// Progress Bar Animation
document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');
    let animated = false; // Para evitar que se anime varias veces

    function animateBars() {
        progressBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            const progressElement = bar.querySelector('.progress');
            progressElement.style.width = percentage + '%'; // Establece el ancho de la barra de progreso
        });
    }

    function checkScroll() {
        const abilitiesSection = document.querySelector('.habilities');
        const sectionPosition = abilitiesSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        // Verifica si la sección está visible en la ventana
        if (!animated && sectionPosition < screenPosition) {
            animateBars();
            animated = true; // Evita que se anime nuevamente
        }
    }

    window.addEventListener('scroll', checkScroll);
});

// -----------------------------------------------------

// To top button
// Define la función en el ámbito global
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');
    let animated = false; // Para evitar que se anime varias veces

    function animateBars() {
        progressBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            const progressElement = bar.querySelector('.progress');
            progressElement.style.width = percentage + '%'; // Establece el ancho de la barra de progreso
        });
    }

    function checkScroll() {
        const abilitiesSection = document.querySelector('.habilities');
        const sectionPosition = abilitiesSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        // Verifica si la sección está visible en la ventana
        if (!animated && sectionPosition < screenPosition) {
            animateBars();
            animated = true; // Evita que se anime nuevamente
        }

        // Mostrar/Ocultar el botón de volver arriba
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block"; // Muestra el botón
        } else {
            scrollToTopBtn.style.display = "none"; // Oculta el botón
        }
    }

    window.addEventListener('scroll', checkScroll);
});
// ---------------------------------------------------