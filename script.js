// Typed.js for typing effect
const typed = new Typed('#typed', {
  strings: ['AI & Web Developer', 'ML Enthusiast', 'Creative Technologist'],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// ScrollReveal animations
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.hero-content', { origin: 'left' });
ScrollReveal().reveal('.hero-img', { origin: 'right' });
ScrollReveal().reveal('.section-title', { origin: 'top' });
ScrollReveal().reveal('.about-container, .skills-container, .projects-container, .contact-info', {
  origin: 'bottom',
  interval: 100
});
