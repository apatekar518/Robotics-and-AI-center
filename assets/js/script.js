const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    
    // Toggle hamburger icon between bars and 'X'
    const icon = hamburger.querySelector("i");
    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Close menu when clicking any nav link on mobile
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = hamburger.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
}));