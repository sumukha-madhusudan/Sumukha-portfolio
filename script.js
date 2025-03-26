let index = 0;

function moveSlide(step) {
    let slides = document.querySelector(".slides");
    let totalSlides = document.querySelectorAll(".slides img").length;

    index += step;

    if (index >= totalSlides) index = 0; // Loop back to first image
    if (index < 0) index = totalSlides - 1; // Loop back to last image

    slides.style.transform = `translateX(${-index * 100}%)`;
}
