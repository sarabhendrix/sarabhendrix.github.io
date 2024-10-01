document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('drawing');
    const button = document.getElementById('draw-stars');
    const numStarsInput = document.getElementById('num-stars');
    const errorMessage = document.createElement('p');
    const starMessage = document.createElement('p'); // Create a paragraph for star messages

    // Style the error message
    errorMessage.style.color = 'red';
    errorMessage.style.textAlign = 'center';
    errorMessage.style.display = 'none';
    document.getElementById('exercise').appendChild(errorMessage);

    // Style the star message
    starMessage.style.color = 'blue';
    starMessage.style.textAlign = 'center';
    starMessage.style.display = 'none';
    document.getElementById('exercise').appendChild(starMessage);

    button.addEventListener('click', () => {
        const numStars = parseInt(numStarsInput.value);

        // Clear previous stars and messages
        section.innerHTML = '';
        errorMessage.style.display = 'none';
        starMessage.style.display = 'none'; // Hide star message

        // Validate input
        if (isNaN(numStars) || numStars <= 0) {
            errorMessage.textContent = 'Please enter a valid positive number for stars.';
            errorMessage.style.display = 'block';
            return;
        }

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('five-pointed-star');

            // Get section dimensions
            const sectionWidth = section.clientWidth;
            const sectionHeight = section.clientHeight;

            // Generate random positions
            const randomX = Math.random() * (sectionWidth - 100);
            const randomY = Math.random() * (sectionHeight - 100);

            // Position the star
            star.style.left = `${randomX}px`;
            star.style.top = `${randomY}px`;

            // Add click event to show the star number
            star.addEventListener('click', () => {
                starMessage.textContent = `This is star number ${i + 1}!`; // Update the message with the star number
                starMessage.style.display = 'block'; // Show the star message
            });

            // Append star to the section
            section.appendChild(star);
        }
    });
});