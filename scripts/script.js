const slider = document.querySelector('.js-slider');
const prvBtn = document.querySelector('.js-prvBtn');
const nxtBtn = document.querySelector('.js-nxtBtn');
let currentIndex = 0;

updateSlider();

prvBtn.addEventListener('click', ()=>{
  if (currentIndex > -1) {
    currentIndex--; // Bewege nach links
    updateSlider();
  }
});

nxtBtn.addEventListener('click', ()=> {
  if (currentIndex < 1) {
    currentIndex++; // Bewege nach rechts
    updateSlider();
  }
})

// Event-Listener für Fenstergröße ändern
window.addEventListener('resize', () => {
  currentIndex = 0;
  updateSlider(); 
});

function updateSlider() {
  const offset = -currentIndex * 100; 
  slider.style.transform = `translateX(${offset}%)`;
}
