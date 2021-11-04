const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentCountActive = 1;

next.addEventListener('click', () => {
    currentCountActive++;
    if (currentCountActive > circles.length) {
        currentCountActive = circles.length;
    } 

    update();
})

prev.addEventListener('click', () => {
    currentCountActive--;
    if (currentCountActive < 1) {
        currentCountActive = 1;
    } 
    update();
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentCountActive) {
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentCountActive === 1) {
        prev.disabled = true;
    } else if (currentCountActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}