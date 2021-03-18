document.addEventListener( 'DOMContentLoaded', function () {
	let splide = new Splide( '#image-slider', {
        'cover'      : true,
		'heightRatio': 1,
        'type': 'loop',
        'height': '55vh',
        'arrows': 'slider',
        'pagination': false,
    } ).mount();
    // custom styling of arrows
    const arrows = splide.root.children[0];
    const nextArrow = splide.Components.Arrows.arrows.next;
    const prevArrow = splide.Components.Arrows.arrows.prev;
    arrows.style.position = "absolute";
    arrows.style.bottom = "1.5rem";
    arrows.style.right = "-0.85rem";
    arrows.style.width = "9rem";
    nextArrow.style.background = "black";
    prevArrow.style.background = "black";
    nextArrow.style.opacity = "1";
    prevArrow.style.opacity = "1";
    nextArrow.style.padding = "1.5rem 2rem";
    prevArrow.style.padding = "1.5rem 2rem";
    nextArrow.style.borderRadius = "0";
    prevArrow.style.borderRadius = "0";
    nextArrow.style.color = "white";
    prevArrow.style.color = "white";
    nextArrow.innerHTML = `<img class="arrow-next" src="./images/icon-angle-right.svg" style="pointer-events:none">`;
    prevArrow.innerHTML = `<img class="arrow-prev" src="./images/icon-angle-left.svg" style="pointer-events:none">`;
    //-------------------------

    // Change body text depending on which image is active (add more if statements if adding more content)
    // index refers to which image is currently active.
    const focusTitle = document.querySelector(".focus__title");
    const focusDescription = document.querySelector(".focus__description");
    splide.on("active", (e)=> {
        if(e.index === 0) { 
            focusTitle.innerHTML =  "Discover innovative ways to decorate";
            focusDescription.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
        } else if(e.index === 1) {
            focusTitle.innerHTML = "We are available all across the globe"
            focusDescription.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
        } else {
            focusTitle.innerHTML = "Manufactured with the best materials"
            focusDescription.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
        }
    })
} );

const hamburgerLogo = document.querySelector(".hero__hamburger");
const menuLinks = document.querySelector(".hero__links");
const logo = document.querySelector(".hero__logo");
const overlay = document.querySelector(".overlay");

hamburgerLogo.addEventListener("click", () => {
    if(hamburgerLogo.classList.contains("menu-active")) {
        hamburgerLogo.src = "./images/icon-hamburger.svg";
        hamburgerLogo.classList.remove("menu-active");
        menuLinks.style.display = "none";
        logo.style.display = "block";
    } else {
        hamburgerLogo.classList.add("menu-active");
        menuLinks.style.display = "flex";
        logo.style.display = "none";
        hamburgerLogo.src = "./images/icon-close.svg";
    }
})

