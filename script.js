const container = document.getElementById('heart-container');
const pattern = ['red', 'red', 'pink'];
let index = 0;

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart', pattern[index]);

    // Random position around the center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const angle = Math.random() * 2 * Math.PI;
    const radius = 100 + Math.random() * 50;
    heart.style.left = centerX + radius * Math.cos(angle) - 25 + 'px';
    heart.style.top = centerY + radius * Math.sin(angle) - 25 + 'px';

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);

    index = (index + 1) % pattern.length;
}

setInterval(createHeart, 700);
