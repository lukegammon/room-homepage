const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider div");

const prevButton = document.querySelector("#hero__slider-left");
const nextButton = document.querySelector("#hero__slider-right");

let counter = 1;
const size = sliderImages[0].clientWidth;

// Set slider to actual first image (not clone)
slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener("click", () => {
    if(counter >= sliderImages.length - 1) return;
    slider.style.transition = "transform 0.5s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener("click", () => {
    if(counter <= 0) return;
    slider.style.transition = "transform 0.5s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slider.addEventListener("transitionend", () => {
    if(sliderImages[counter].id === "lastClone") {
        slider.style.transition = "none";
        counter = 1;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(sliderImages[counter].id === "firstClone") {
        slider.style.transition = "none";
        counter = sliderImages.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})