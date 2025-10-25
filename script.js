const container = document.getElementById('heart-container');
const pattern = ['red', 'red', 'pink'];
let index = 0;

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart', pattern[index]);

    container.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => heart.remove(), 2000); // match animation duration

    index = (index + 1) % pattern.length;
}

// Spawn heart every 0.7s for overlapping effect
setInterval(createHeart, 700);
