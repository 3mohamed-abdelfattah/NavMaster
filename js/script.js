// Select hamburger and nav links
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle the display of the menu links
hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !expanded);
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active"); // Adding active class for color change
});
