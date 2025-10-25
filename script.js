const container = document.getElementById('heart-container');

const pattern = ['red', 'red', 'pink'];
let index = 0;

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart', pattern[index]);
    container.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 1000);

    index = (index + 1) % pattern.length;
}

// Spawn heart every 700ms
setInterval(createHeart, 700);
