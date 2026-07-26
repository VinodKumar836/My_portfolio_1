// ==========================================
// HAMBURGER MENU
// ==========================================

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        hamburger.classList.remove("active");
    });
});


// ==========================================
// STICKY HEADER EFFECT
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(5,8,22,.70)";
        header.style.boxShadow = "none";

    }

});


// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// FADE-IN ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    ".section,.project-card,.skill-card,.timeline-item,.contact-card,.education-card,.training-card"
);

const reveal = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


// ==========================================
// TYPING EFFECT
// ==========================================

const subtitle = document.querySelector(".hero h2");

const roles = [
    "Python Developer",
    "Machine Learning Engineer",
    "Data Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        subtitle.textContent = currentRole.substring(0, charIndex++);
    } else {

        subtitle.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length + 1) {

        deleting = true;
        speed = 1800;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();