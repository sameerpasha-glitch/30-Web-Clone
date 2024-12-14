/** @format */

// Select all videos
const videos = document.querySelectorAll(".sec-vid");

// Create Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

// Observe each video
videos.forEach((video) => observer.observe(video));
// Select all videos with the class 'colab-vid'
const colabVideos = document.querySelectorAll(".colab-vid");

// Add event listeners to play/pause the video on hover
colabVideos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play(); // Play video when hovered
  });

  video.addEventListener("mouseleave", () => {
    video.pause(); // Pause video when the mouse leaves
    video.currentTime = 0; // Optionally, reset to the start
  });
});
// Select all score number elements
const scorNums = document.querySelectorAll(".scor-num");

scorNums.forEach((scorNum) => {
  // Extract the target value from the data attribute
  const targetValue = parseInt(scorNum.getAttribute("data-value"), 10);

  let currentValue = 0; // Start from 0

  // Function to animate the number
  const interval = setInterval(() => {
    currentValue++;
    scorNum.textContent = `${currentValue}${
      scorNum.textContent.includes("%") ? "%" : ""
    }`; // Append '%' if it exists
    if (currentValue >= targetValue) {
      clearInterval(interval); // Stop animation
      scorNum.textContent = `${targetValue}${
        scorNum.textContent.includes("%") ? "%" : ""
      }`; // Ensure final value is correct
    }
  }, 30); // Adjust the speed by changing the interval time
});

const nav = document.querySelector("#navbar");
nav.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.style.display = "flex";
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.left = "0";
    nav.style.borderRadius = "15px";
    nav.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.2)";
    nav.style.transition = "background-color 0.3s ease";
    nav.style.padding = "5px";
    nav.style.width = "100%";
    nav.style.zIndex = "2000";
  } else {
    nav.style.display = "none";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
