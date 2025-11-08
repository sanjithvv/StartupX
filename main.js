// ---------- Smooth Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---------- Mobile Menu ----------
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('nav ul');
menuBtn.addEventListener('click', () => navList.classList.toggle('nav-open'));

// ---------- Back To Top ----------
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) toTop.classList.add('show');
  else toTop.classList.remove('show');
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---------- Dark / Light Mode ----------
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// ---------- Typing Effect ----------
const words = ["Innovate.", "Grow.", "Succeed."];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const typed = document.getElementById("typed-text");

function typeEffect() {
  currentWord = words[i];
  if (isDeleting) {
    typed.textContent = currentWord.substring(0, j--);
  } else {
    typed.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
typeEffect();

// ---------- Fade-In on Scroll ----------
const fadeSections = document.querySelectorAll(".fade-section");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeSections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < triggerBottom) sec.classList.add("visible");
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ---------- Highlight Services on Scroll ----------
const serviceCards = document.querySelectorAll("#services .card");
window.addEventListener("scroll", () => {
  serviceCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    card.classList.toggle("highlight", isVisible);
  });
});

// ---------- Form Validation + Feedback ----------
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    statusMsg.textContent = "⚠️ Please fill in all fields.";
    statusMsg.style.color = "red";
  } else {
    statusMsg.textContent = "✅ Message sent! We'll get back to you soon.";
    statusMsg.style.color = "green";
    form.reset();
  }
});
