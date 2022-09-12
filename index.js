const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'auto';
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
  } else {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
    document.body.style.overflow = 'hidden';
  }
});
// Hide navMenu
/* eslint eqeqeq: "off", curly: "error" */
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navmenu.classList.remove('active');
}));
