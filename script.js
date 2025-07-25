/* ========== MOBILE NAV TOGGLE ========== */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ========== SCROLL EFFECTS ========== */
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.getElementById('scrollTop');

/* nav highlight & scroll-top button */
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
  });
  navItems.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });

  scrollTopBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
});

/* smooth scroll for nav links */
navItems.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('open');
  });
});

/* scroll to top */
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ========== FADE-IN ON SCROLL ========== */
const faders = document.querySelectorAll('.about, .skills, .projects, .contact');

const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = 'translateY(0)';
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  appearOnScroll.observe(el);
});