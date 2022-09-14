const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.list-menu');
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
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navmenu.classList.remove('active');
}));
document.getElementsByClassName('buttonL').addEventListener('click', () => {
  document.getElementsByClassName('bottonL').classList.toggle('hide');
  document.getElementsByClassName('buttonM').classList.toggle('hide');
});
document.getElementsByClassName('buttonM').addEventListener('click', () => {
  document.getElementsByClassName('buttonL').classList.toggle('hide');
  document.getElementsByClassName('buttonM').classList.toggle('hide');
});