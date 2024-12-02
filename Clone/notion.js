/** @format */

const images = document.querySelectorAll(".carousel-image");
let currentIndex = 0;

function showNextImage() {
  // Remove 'active' class from the current image
  images[currentIndex].classList.remove("active");

  // Increment the index to show the next image
  currentIndex = (currentIndex + 1) % images.length;

  // Add 'active' class to the new image
  images[currentIndex].classList.add("active");
}

// Show the first image initially
images[currentIndex].classList.add("active");

// Set interval to change image every 4 seconds
setInterval(showNextImage, 4000);

const header = document.getElementById("hd1");
header.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    header.style.display = "flex";
    header.style.backgroundColor = "#f6f5f4";
    header.style.position = "fixed";
    header.style.top = "0";
  } else {
    header.style.display = "none";
  }
});
