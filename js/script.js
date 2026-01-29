function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// IN-GALLERY PREVIEW FUNCTIONS
function showPreview(src, title) {
  const previewArea = document.getElementById("galleryPreview");
  const focusImg = document.getElementById("focusImg");
  const focusTitle = document.getElementById("focusTitle");

  focusImg.src = src;
  focusTitle.innerText = title;

  previewArea.style.display = "block";
  
  // Smoothly scroll to the preview panel so the user sees it
  previewArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closePreview() {
  document.getElementById("galleryPreview").style.display = "none";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Scroll Animation Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));