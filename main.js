// Declare variables
const headerNav = document.querySelector(".nav");
const headerNavList = document.querySelector(".nav__list");
const overlayEffect = document.querySelector(".overlay");
const headerTest = document.querySelector(".header");
const headerContent = document.querySelector(".header__content");

//Creating the Navigation Burger
const navBurger = document.createElement("nav");
navBurger.classList.add("nav__burger");
headerContent.appendChild(navBurger);

const burgerIcon = document.createElement("img");
burgerIcon.classList.add("burger__icon");
burgerIcon.src = "images/burgerIcon.png";
burgerIcon.alt = "Navigation Button";
navBurger.appendChild(burgerIcon);

//Navigation Burger Function
burgerIcon.addEventListener("click", () => {
    overlayEffect.classList.add("active");
    setTimeout(() => {
        headerNav.classList.add("__mobile");
        burgerIcon.style.display = "none";
    }, 100);
    const closeNav = document.createElement("img");
    closeNav.classList.add("closeNav");
    closeNav.src = "images/close.png";
    closeNav.alt = "Close Navigation Menu"
    headerNav.appendChild(closeNav);

    closeNav.addEventListener("click", () => {
        headerNav.classList.remove("__mobile");
        burgerIcon.style.display = "flex";
        overlayEffect.classList.remove("active");
    })
})

