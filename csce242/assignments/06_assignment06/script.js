const toggle = document.getElementById('toggle-menu');
const menu = document.getElementById('nav-items');
const arrow = document.getElementById('arrow');
const slidersect = document.getElementById("exercise-1-sect");
const imagesect = document.getElementById("exercise-2-sect");
const slider = document.getElementById("color-slider");
const message = document.getElementById("message");
const img = document.getElementById('random-image');

toggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    arrow.innerHTML = menu.style.display === 'block' ? '&#8593;' : '&#8595;'; // Up or down arrow
    console.log("ran");
});

document.getElementById("exercise-1").onclick = (event) => {
    event.preventDefault();
    slidersect.style.display = 'block';
    imagesect.style.display = 'none'; 
};

document.getElementById("exercise-2").onclick = (event) => {
    event.preventDefault();
    slidersect.style.display = 'none';
    imagesect.style.display = 'block'; 
};

function updateColor(){
    const red = slider.value;
    slidersect.style.backgroundColor = `rgb(${red}, 0, 0)`;
    if(red > 100 && red <= 200){
        message.innerHTML = `Medium`;
    }
    else if(red > 200){
        message.innerHTML = `Bright`;
    }
};

slider.addEventListener('input', updateColor);

function showImage(size){
    let imageSize;
    switch(size){
        case 'small':
            imageSize = '50/50';
            break;
        case 'medium':
            imageSize = '150/150';
            break;
        case 'large':
            imageSize = '300/300';
            break;
        default:
            imageSize = '150/150';
    }
    img.src = `https://picsum.photos/${imageSize}`; 
    img.style.display = 'block'; 
};