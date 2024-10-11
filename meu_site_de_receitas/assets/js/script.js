// Script básico para começar
console.log("Script funcionando!");
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

function moveSlide(n) {
    slideIndex += n - 1; // Ajusta o índice baseado na direção
    showSlides();
}

// Função para adicionar animação de fade-in aos cartões
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = 0; // Começa invisível
        card.style.transform = 'translateY(20px)'; // Mover ligeiramente para baixo
        setTimeout(() => {
            card.style.opacity = 1; // Torna visível
            card.style.transform = 'translateY(0)'; // Retorna à posição original
        }, index * 200); // Cada cartão é animado com um pequeno atraso
    });
});

// Criação dos modais com as receitas
const recipes = {
    "Estrogonofe de Carne": "Aqui está a receita de estrogonofe de carne...",
    "Almôndegas": "Aqui está a receita de almôndegas simples...",
    // Adicione mais receitas conforme necessário
};

// Adiciona o modal para cada receita
for (const recipe in recipes) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = `modal-${recipe.replace(/ /g, '_').toLowerCase()}`; // Exemplo: modal-estrogonofe_de_carne
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>${recipe}</h2>
            <p>${recipes[recipe]}</p>
        </div>
    `;
    document.body.appendChild(modal);
}

// Função para abrir o modal
const openModalButtons = document.querySelectorAll('.card button');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const recipeName = button.parentElement.querySelector('h3').innerText;
        const modal = document.getElementById(`modal-${recipeName.replace(/ /g, '_').toLowerCase()}`);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});

// Função para fechar o modal
const closeButtons = document.querySelectorAll('.close-btn');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
