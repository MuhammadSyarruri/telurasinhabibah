const navbar = document.querySelector('.nav-a')

document.getElementById('menubar').onclick = () => {
    navbar.classList.toggle('active')
}

const menu = document.getElementById('menubar')

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active')
    }
})
