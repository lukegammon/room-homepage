document.addEventListener( 'DOMContentLoaded', function () {
	let splide = new Splide( '#image-slider', {
        'cover'      : true,
		'heightRatio': 1,
        'type': 'loop',
        'height': '55vh',
        'arrows': 'slider',
    } ).mount();
    // custom styling of arrows
    const arrows = splide.root.children[0];
    const nextArrow = splide.Components.Arrows.arrows.next;
    const prevArrow = splide.Components.Arrows.arrows.prev;
    arrows.style.position = "absolute";
    arrows.style.bottom = "1.5rem";
    arrows.style.right = "-0.85rem";
    arrows.style.width = "9.5rem";
    nextArrow.style.background = "black";
    prevArrow.style.background = "black";
    nextArrow.style.opacity = "1";
    prevArrow.style.opacity = "1";
    nextArrow.style.height = "3rem";
    prevArrow.style.height = "3rem";
    nextArrow.style.width = "4rem";
    prevArrow.style.width = "4rem";
    nextArrow.style.borderRadius = "0";
    prevArrow.style.borderRadius = "0";
    nextArrow.style.color = "white";
    nextArrow.innerHTML = `<img class="arrow-next" src="./images/icon-angle-right.svg" style="pointer-events:none">`;
    prevArrow.innerHTML = `<img class="arrow-prev" src="./images/icon-angle-left.svg" style="pointer-events:none">`;
} );


/*const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider div");
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

const prevButton = document.querySelector("#hero__slider-left");
const nextButton = document.querySelector("#hero__slider-right");

let counter = 1;
const size = sliderImages[0].clientWidth;

// Set slider to actual first image (not clone)
slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener("click", () => {
    if(counter >= sliderImages.length - 1) return;
    sliderImages[counter + 1].style.display = "block";
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
})*/