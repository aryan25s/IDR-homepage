// Navbar scroll effect

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){
        navbar.classList.add("navbar--scrolled");
    }
    else{
        navbar.classList.remove("navbar--scrolled");
    }

});



const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

    mobileMenu.classList.remove("open");
    hamburger.classList.remove("open");

    });

});



const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    form.style.display = "none";
    successMessage.style.display = "block";

});