document.addEventListener('DOMContentLoaded', function() {
    const heart = document.querySelector('.heart');
    const text = document.querySelector('.heart-text');
    
    // Optional: Change text on click
    heart.addEventListener('click', function() {
        const messages = [
            "I ❤️ You",
            "Forever",
            "Always",
            "My Love",
            "You're Amazing"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        text.textContent = randomMessage;
    });
    
    // Optional: Pause/play animation on spacebar
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            const isPaused = heart.style.animationPlayState === 'paused';
            heart.style.animationPlayState = isPaused ? 'running' : 'paused';
        }
    });
});
