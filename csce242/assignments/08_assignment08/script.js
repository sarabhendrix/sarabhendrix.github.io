document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const imageTitle = document.getElementById('image-title');
    const imageDescription = document.getElementById('image-description');
    const images = [
        {
            src: 'images/birthday.jpg',
            title: 'Birthday',
            description: 'Time to sing Happy Birthday!'
        },
        {
            src: 'images/clown.jpg',
            title: 'Clown',
            description: 'He is such a silly clown.'
        },
        {
            src: 'images/rain.jpg',
            title: 'Rain',
            description: 'Make sure you have your umbrella!'
        },
        {
            src: 'images/read.jpg',
            title: 'Read',
            description: 'What is his favorite book?'
        },
        {
            src: 'images/shovel.jpg',
            title: 'Shovel',
            description: 'What is he going to dig?'
        },
        {
            src: 'images/work.jpg',
            title: 'Work',
            description: 'Time to go to work!'
        }
    ];

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.classList.add('image');
        img.addEventListener('click', () => {
            imageTitle.textContent = image.title;
            imageDescription.textContent = image.description;
        });
        gallery.appendChild(img);
    });
});