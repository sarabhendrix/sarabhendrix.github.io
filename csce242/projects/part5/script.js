const toggle = document.getElementById('toggle-menu');
const menu = document.getElementById('nav-items');
const arrow = document.getElementById('arrow');

toggle.addEventListener('click', () => {
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
        arrow.innerHTML = '&#8595;'; 
    } else {
        menu.classList.add('visible');
        arrow.innerHTML = '&#8593;'; 
    }
});

function resetMenuDisplay() {
    if (window.innerWidth >= 760) {
        menu.classList.add('visible'); 
        arrow.innerHTML = ''; 
    } else {
        menu.classList.remove('visible'); 
        arrow.innerHTML = '&#8595;'; 
    }
}

resetMenuDisplay();

window.addEventListener('resize', resetMenuDisplay);