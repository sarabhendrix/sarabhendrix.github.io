const toggle = document.getElementById('toggle-menu');
const menu = document.getElementById('nav-items');
const arrow = document.getElementById('arrow');

toggle.addEventListener('click', () => {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
            arrow.innerHTML = '&#8595;'; // Down arrow
        } else {
            menu.style.display = 'block';
            arrow.innerHTML = '&#8593;'; // Up arrow
        }
});