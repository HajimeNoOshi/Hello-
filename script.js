const container = document.getElementById('heart-container');
const pattern = ['red', 'red', 'hotpink']; // color pattern
let index = 0;

function createHeart() {
    const svgNS = "http://www.w3.org/2000/svg";

    const heart = document.createElementNS(svgNS, "svg");
    heart.setAttribute("viewBox", "0 0 32 29.6");
    heart.classList.add('heart-svg');
    heart.setAttribute("stroke", pattern[index]);

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d","M23.6,0c-2.9,0-5.4,1.7-6.6,4.1C15.8,1.7,13.3,0,10.4,0C4.7,0,0,4.7,0,10.4c0,11.5,16,19.2,16,19.2s16-7.7,16-19.2C32,4.7,27.3,0,23.6,0z");
    path.setAttribute("none","none");
    path.setAttribute("stroke-width","10");
    path.setAttribute("stroke-linecap","round");
    path.setAttribute("stroke-linejoin","round");

    heart.appendChild(path);
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 50000);

    index = (index + 2) % pattern.length;
}

// Spawn a heart every 0.5s
setInterval(createHeart, 5000);
