// Função para mover o slide
function moveSlide(direction) {
    const totalSlides = sliderContainer.children.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides; // Mantém o índice dentro dos limites
    const offset = -currentIndex * 100; // Calcula o deslocamento
    sliderContainer.style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
}

// Carregar produtos ao iniciar
fetchProducts();


// Função para buscar produtos eletrônicos com inteligência artificial na API do Mercado Livre
async function fetchAIProducts() {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=inteligencia+artificial'; // URL da API

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProducts(data.results);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

// Função para exibir os produtos na página
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpa a lista antes de adicionar novos produtos

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // Adiciona imagem, nome e preço do produto
        productDiv.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <a href="${product.permalink}" target="_blank">Ver Produto</a>
        `;
        productList.appendChild(productDiv);
    });
}

// Chama a função para buscar produtos quando a página é carregada
document.addEventListener('DOMContentLoaded', fetchAIProducts);

// Seleção do container do slider
const sliderContainer = document.querySelector('.slider-container');
let currentIndex = 0; // Índice atual do slide

// Função para buscar produtos da API do Mercado Livre
async function fetchProducts() {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=eletrônicos');
    const data = await response.json();

    // Adiciona produtos ao carrossel
    data.results.slice(0, 5).forEach(product => {
        const sliderItem = document.createElement('div');
        sliderItem.classList.add('slider-item');

        sliderItem.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" class="banner-img">
            <div class="banner-content">
                <h2 class="banner-title">${product.title}</h2>
                <p class="banner-text">Preço: R$ ${product.price.toFixed(2)}</p>
            </div>
        `;

        sliderContainer.appendChild(sliderItem);
    });
}

