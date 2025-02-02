// Dark Mode Toggle
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

let darkMode = localStorage.getItem("darkMode");
if (darkMode === "true") {
  body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save dark mode preference to local storage
  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));

    

  // Update button text to reflect mode change
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.innerHTML = "🌞"; // Switch to sun icon for light mode

    document.querySelector(".navbar").style.backgroundColor = "#ffffffeb"

    document.querySelectorAll(".nav-links li a").forEach((link) => {
      link.style.color = "#121212";
    })

    document.querySelector(".hamburger").style.color = "#121212"


  } else {
    darkModeToggle.innerHTML = "🌙"; // Switch to moon icon for dark mode

    document.querySelector(".navbar").style.backgroundColor = "#0d0d0d77"

    document.querySelectorAll(".nav-links li a").forEach((link) => {
      link.style.color = "#fff";
    })

    document.querySelector(".hamburger").style.color = "#fff"
  }
});

// Hamburger Menu for Mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Get the modal and its elements
const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close-btn");

// Add click event listeners to the "View Details" buttons
const viewButtons = document.querySelectorAll(".view-details");

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Populate modal with project details
    const projectInfo = button.parentElement;
    const projectTitle = projectInfo.querySelector("h3").innerText;
    const projectDesc = projectInfo.querySelector("p").innerText;

    document.getElementById(
      "modal-description"
    ).innerText = `${projectTitle}: ${projectDesc}`;

    // Display the modal
    modal.style.display = "block";
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Parallax effect for the hero background
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  const heroBackground = document.querySelector(".hero-background");

  heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

