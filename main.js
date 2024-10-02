document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Function to show the selected slide
    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Add active class to current slide
        slides[currentSlide].classList.add('active');
    }

    // Move to the next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Move to the previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Automatic slide transition
    let autoSlide = setInterval(nextSlide, 10000);

    // Stop automatic transition when clicking on arrows
    prevButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        prevSlide();
        autoSlide = setInterval(nextSlide, 10000);
    });

    nextButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        nextSlide();
        autoSlide = setInterval(nextSlide, 10000);
    });

    // Show the first slide on load
    showSlide(currentSlide);
});
