// // Progress Bar Animation
// document.addEventListener('DOMContentLoaded', function () {
//     const progressBars = document.querySelectorAll('.progress-bar');
//     let animated = false; // Para evitar que se anime varias veces

//     function animateBars() {
//         progressBars.forEach(bar => {
//             const percentage = bar.getAttribute('data-percentage');
//             const progressElement = bar.querySelector('.progress');
//             progressElement.style.width = percentage + '%'; // Establece el ancho de la barra de progreso
//         });
//     }

//     function checkScroll() {
//         const abilitiesSection = document.querySelector('.portfolio');
//         const sectionPosition = abilitiesSection.getBoundingClientRect().top;
//         const screenPosition = window.innerHeight;

//         // Verifica si la sección está visible en la ventana
//         if (!animated && sectionPosition < screenPosition) {
//             animateBars();
//             animated = true; // Evita que se anime nuevamente
//         }
//     }

//     window.addEventListener('scroll', checkScroll);
// });

// -----------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

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
        const abilitiesSection = document.querySelector('.portfolio');
        const sectionPosition = abilitiesSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        // Verifica si la sección está visible en la ventana
        if (!animated && sectionPosition < screenPosition) {
            animateBars();
            animated = true; // Evita que se anime nuevamente
        }

        // Mostrar/Ocultar el botón de volver arriba
        // const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        // if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        //     scrollToTopBtn.style.display = "block"; // Muestra el botón
        // } else {
        //     scrollToTopBtn.style.display = "none"; // Oculta el botón
        // }
    }

    window.addEventListener('scroll', checkScroll);
});
// ---------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const codeLines = [
        "const progressBars = document.querySelectorAll('.progress-bar');",
        "let animated = false;",
        "function animateBars() { ... }",
        "const percentage = bar.getAttribute('data-percentage');",
        "progressElement.style.width = percentage + '%';",
        "window.addEventListener('scroll', checkScroll);",
        "document.addEventListener('DOMContentLoaded', function () { ... });",
        "const abilitiesSection = document.querySelector('.habilities');",
        "const scrollToTopBtn = document.getElementById('scrollToTopBtn');",
        "background: linear-gradient(#212121, #212121);",
        "display: flex; align-items: center; justify-content: center;",
        "color: $text; font-weight: 600;",
        "width: 600px; background: $primary;",
        "opacity: 0; animation: progress 0.4s ease-in-out forwards;",
        "margin: 0 15px; padding: 10px 20px;",
        "border-radius: 7px; height: 8px;",
        "display: block; font-size: 14px;",
        "cursor: pointer; z-index: 1000;"
    ];

    const background = document.createElement('div');
    background.classList.add('animated-background');
    document.body.appendChild(background);

    const maxLines = 20; // Límite de líneas de código
    let currentLines = 0;
    let usedLines = new Set();

    function createCodeLine() {
        if (currentLines >= maxLines) {
            // Elimina la línea más antigua si se alcanza el límite
            const oldestLine = background.children[0];
            if (oldestLine) {
                oldestLine.remove();
                currentLines--;
            }
        }

        const randomIndex = Math.floor(Math.random() * codeLines.length);
        const lineText = codeLines[randomIndex];

        // Verifica si la línea ya se ha utilizado
        if (usedLines.has(lineText)) {
            // Si la línea ya se ha utilizado, simplemente salimos de la función
            return;
        }

        usedLines.add(lineText);

        const line = document.createElement('div');
        line.classList.add('code-line');
        line.textContent = lineText;
        
        // Posiciona la línea en la parte inferior de la pantalla
        line.style.top = Math.random() * window.innerHeight + 'px';
        
        // Duración de la animación
        const duration = (window.innerWidth / 200) + 5; // Ajusta la duración según el ancho de la pantalla
        line.style.animationDuration = duration + 's';
    
        // Ajusta la posición final de la línea de código
        line.style.transform = `translateX(${window.innerWidth}px)`;
    
        background.appendChild(line);
    
        // Elimina la línea después de que la animación termine
        line.addEventListener('animationend', () => {
            line.remove();
            currentLines--;
            usedLines.delete(lineText); // Permite que la línea se vuelva a usar
        });

        currentLines++;
    }

    // Genera una nueva línea de código cada 1 segundo
    setInterval(createCodeLine, 1000);
});