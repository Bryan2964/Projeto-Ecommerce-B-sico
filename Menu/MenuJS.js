const botaoMenu = document.querySelector 
('.botao-menu');

const linkNav = document.querySelector 
('.link-nav-menu');

botaoMenu.addEventListener('click', () => {
    botaoMenu.classList.toggle("active");
    linkNav.classList.toggle("active");
});