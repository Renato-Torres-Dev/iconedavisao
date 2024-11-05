let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const circles = document.querySelectorAll('.circle');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    circles.forEach((circle, i) => {
        circle.classList.remove('active');
        if (i === index) {
            circle.classList.add('active');
        }
    });
}

function changeSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        changeSlide(index);
    });
})

circles[currentSlide].classList.add('active');
setInterval(nextSlide, 10000);