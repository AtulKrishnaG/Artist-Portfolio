function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active"); // Toggles the visibility class
}

// Close menu when a link is clicked (Mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

function scrollToSection(id) {
  const element = document.getElementById(id);
  const offset = 80; // Account for fixed navbar height
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function showPreview(src, title) {
  const previewArea = document.getElementById("galleryPreview");
  const focusImg = document.getElementById("focusImg");
  const focusTitle = document.getElementById("focusTitle");

  focusImg.src = src;
  focusTitle.innerText = title;
  previewArea.style.display = "block";
  
  // Adjusted scroll for better mobile viewing
  const yOffset = -100; 
  const y = previewArea.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({top: y, behavior: 'smooth'});
}

function closePreview() {
  document.getElementById("galleryPreview").style.display = "none";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const btn = document.querySelector(".dark-btn");
  btn.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

// Optimized Scroll Animation Observer
const observerOptions = {
  threshold: 0.05 // Trigger sooner on mobile
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.filter-btn');

  // 1. Update Button States
  buttons.forEach(btn => {
    btn.classList.remove('active');
    // Matches button text to the clicked category
    if (btn.textContent.trim() === category || (category === 'all' && btn.textContent.trim() === 'All')) {
      btn.classList.add('active');
    }
  });

  // 2. Filter the Images
  items.forEach(item => {
    const itemCategory = item.getAttribute('data-category');
    
    if (category === 'all' || itemCategory === category) {
      item.style.display = "block";
      // Small timeout to allow the 'display: block' to register before animating
      setTimeout(() => item.classList.add('show'), 10); 
    } else {
      item.classList.remove('show');
      item.style.display = "none";
    }
  });

  closePreview();
}
