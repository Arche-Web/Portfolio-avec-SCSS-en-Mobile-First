console.log("Bienvenue à bord de l'Arche jeune matelot!");

const btnToggle = document.querySelector('.btn-toggle')
const navbar = document.querySelector('#navbar')

btnToggle.addEventListener('click', function() {
    navbar.classList.toggle('is-open')
} )