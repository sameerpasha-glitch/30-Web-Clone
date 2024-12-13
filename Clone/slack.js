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
