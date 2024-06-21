const images = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    'imagen4.jpg',
    'imagen5.jpg',
    'imagen6.jpg',
    'imagen7.jpg',
    'imagen8.jpg',
    'imagen9.jpg',
    'imagen10.jpg'
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function changeImage() {
    const imageContainer = document.getElementById('image-container');
    const img = document.createElement('img');
    const randomImage = getRandomImage();

    img.src = randomImage;
    img.alt = 'Random Image';

    // Limpiamos el contenedor antes de añadir una nueva imagen
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
}
