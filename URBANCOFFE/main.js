// Navbar toggle for mobile
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('header nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
