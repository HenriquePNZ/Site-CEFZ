const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;
let interval; // Variável para armazenar o intervalo de tempo

function hideSlide() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlider() {
    hideSlide();

    if (currentSlide == slider.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    showSlider();
}

function prevSlider() {
    hideSlide();

    if (currentSlide == 0) {
        currentSlide = slider.length - 1;
    } else {
        currentSlide--;
    }

    showSlider();
}

// Adiciona um intervalo para chamar a função nextSlider() a cada 5 segundos
function startAutoSlide() {
    interval = setInterval(nextSlider, 5000);
}

// Inicia o slideshow automaticamente ao carregar a página
startAutoSlide();

// Adiciona listeners para os botões de navegação
btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

// Função para redirecionar para outras páginas
function redirecionarParaPagina(event) {
    clearInterval(interval); // Limpa o intervalo atual
    startAutoSlide(); // Reinicia o slideshow automático

    if (event.target.classList.contains('quemSomos')) {
        window.location.href = "/assets/html/quemSomos.html";
    } else if (event.target.classList.contains('orientacoes')) {
        window.location.href = "/assets/html/orientacoes.html";
    } else if (event.target.classList.contains('calendario')) {
        window.location.href = "/assets/html/calendario.html";
    } else if (event.target.classList.contains('cursos')) {
        window.location.href = "/assets/html/cursos.html";
    }
}
