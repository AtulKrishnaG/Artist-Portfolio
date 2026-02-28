function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

function scrollToSection(id) {
  const element = document.getElementById(id);
  const offset = 80;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/** 1. GALLERY PREVIEW LOGIC **/
function showPreview(src, title) {
  const previewArea = document.getElementById("galleryPreview");
  const focusImg = document.getElementById("focusImg");
  const focusTitle = document.getElementById("focusTitle");

  focusImg.src = src;
  focusTitle.innerText = title;
  previewArea.style.display = "block";
  
  const yOffset = -100; 
  const y = previewArea.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({top: y, behavior: 'smooth'});
}

function closePreview() {
  document.getElementById("galleryPreview").style.display = "none";
}

/** 2. HAMPER PREVIEW LOGIC **/
function showHamperPreview(src, title) {
  const previewArea = document.getElementById("hamperPreview");
  const focusImg = document.getElementById("hamperFocusImg");
  const focusTitle = document.getElementById("hamperFocusTitle");
  const inquiryBtn = document.getElementById("hamperInquiryBtn");

  // Update Image and Title
  focusImg.src = src;
  focusTitle.innerText = title;
  
  // Update WhatsApp Link dynamically
  const phoneNumber = "918000645066";
  const message = encodeURIComponent(`Hi Neha, I'm interested in the "${title}" gift hamper. Could you share more details?`);
  inquiryBtn.href = `https://wa.me/${phoneNumber}?text=${message}`;

  previewArea.style.display = "block";
  
  const yOffset = -120; 
  const y = previewArea.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({top: y, behavior: 'smooth'});
}

function closeHamperPreview() {
  document.getElementById("hamperPreview").style.display = "none";
}

/** THEME & UTILITIES **/
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const btn = document.querySelector(".dark-btn");
  btn.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

// Intersection Observer for animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

/** FILTER GALLERY LOGIC **/
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.trim() === category || (category === 'all' && btn.textContent.trim() === 'All')) {
      btn.classList.add('active');
    }
  });

  items.forEach(item => {
    const itemCategory = item.getAttribute('data-category');
    if (category === 'all' || itemCategory === category) {
      item.style.display = "block";
      setTimeout(() => item.classList.add('show'), 10); 
    } else {
      item.classList.remove('show');
      item.style.display = "none";
    }
  });

  closePreview();

  
}
