document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('drawing');
    const button = document.getElementById('draw-stars');
    const numStarsInput = document.getElementById('num-stars');
    const errorMessage = document.createElement('p');
    const starMessage = document.createElement('p'); 
    errorMessage.style.color = 'red';
    errorMessage.style.textAlign = 'center';
    errorMessage.style.display = 'none';
    document.getElementById('exercise').appendChild(errorMessage);

    starMessage.style.color = 'blue';
    starMessage.style.textAlign = 'center';
    starMessage.style.display = 'none';
    document.getElementById('exercise').appendChild(starMessage);

    button.addEventListener('click', () => {
        const numStars = parseInt(numStarsInput.value);

        section.innerHTML = '';
        errorMessage.style.display = 'none';
        starMessage.style.display = 'none'; 

        if (isNaN(numStars) || numStars <= 0) {
            errorMessage.textContent = 'Please enter a valid positive number for stars.';
            errorMessage.style.display = 'block';
            return;
        }

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('five-pointed-star');

            const sectionWidth = section.clientWidth;
            const sectionHeight = section.clientHeight;

            const randomX = Math.random() * (sectionWidth - 100);
            const randomY = Math.random() * (sectionHeight - 100);

            star.style.left = `${randomX}px`;
            star.style.top = `${randomY}px`;

            star.addEventListener('click', () => {
                starMessage.textContent = `This is star number ${i + 1}!`; 
                starMessage.style.display = 'block'; 
            });

            section.appendChild(star);
        }
    });
});