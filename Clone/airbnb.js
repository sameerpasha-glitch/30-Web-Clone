/** @format */

const navbar = document.getElementById("hidnav");
navbar.style.display = "none";
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    navbar.style.display = "flex";
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.left = "0";
    navbar.style.width = "100%";
    navbar.style.zIndex = "1000";
  } else {
    // Hide the navbar when scrolled back to top
    navbar.style.display = "none";
  }
});
