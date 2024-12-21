// Função para abrir a página com a chuva de flores
function openFlowerPage() {
    window.open('flowers.html', '_blank');
}

// Carrossel Automático
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
let currentIndex = 0;

const updateCarousel = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// Alteração automática (opcional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length; // Avança para a próxima imagem
    updateCarousel();
}, 3000); // Muda a cada 5 segundos
