// =========================
// Mobile Menu
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// =========================
// Portfolio Lightbox
// =========================

const portfolioImages = document.querySelectorAll(".portfolio-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (portfolioImages.length && lightbox && lightboxImg && closeBtn) {

    portfolioImages.forEach((img) => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

        });

    });

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }

    });

}
AOS.init({
    duration: 900,
    once: true,
    offset: 100
});
// ===== Dark Mode =====

const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

    updateLogo();
});

}
// ===== Back To Top =====

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ===== Navbar Scroll =====

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});
const logo = document.getElementById("site-logo");

function updateLogo() {
    if (!logo) return;

    if (document.body.classList.contains("dark")) {
        logo.src = "images/logo-light.png";
    } else {
        logo.src = "images/logo-dark.png";
    }
}

updateLogo();