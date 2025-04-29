const mainImage = document.getElementById('main-image');

const images = [];
for (let i = 1; i <= 16; i++) {
  images.push(`${i}.png`);
}

setTimeout(() => {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    mainImage.src = images[randomIndex];
  }, 500); 
}, 500); 
const star = document.getElementById('star');

star.addEventListener('click', () => {
  star.classList.toggle('flipped');
});