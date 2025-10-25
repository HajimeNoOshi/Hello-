const container = document.getElementById('heart-container');
const pattern = ['red', 'red', 'pink'];
let index = 0;

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart', pattern[index]);
    heart.textContent = '❤️';

    container.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => heart.remove(), 1500);

    index = (index + 1) % pattern.length;
}

// Spawn heart every 0.5 seconds
setInterval(createHeart, 500);
