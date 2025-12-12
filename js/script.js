const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

/* Add active class for hamburger icon click*/
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // Optional: animate hamburger icon
});

/* remove active class on resize to larger screeen*/
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});