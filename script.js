const container = document.getElementById('hi-container');

// Calculate how many "Hi" texts we need to fill the screen
function fillScreen() {
    container.innerHTML = ''; // clear previous
    const rows = Math.ceil(window.innerHeight / 50);
    const cols = Math.ceil(window.innerWidth / 100);
    for(let i = 0; i < rows * cols; i++){
        const hi = document.createElement('div');
        hi.classList.add('hi-text');
        hi.textContent = i % 2 === 0 ? 'Hi' : 'HI';
        container.appendChild(hi);
    }
}

// Initial fill
fillScreen();

// Update on window resize
window.addEventListener('resize', fillScreen);
