const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.list-menu');
hamburger.addEventListener('click', () => {
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'auto';
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
    /* eslint eqeqeq: "off", curly: "error" */
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

// const navbar1 = document.querySelector('.nav-bar1');
// // const navbaroffset = navbar1.offsetTop + 5;
// window.addEventListener('scroll', () => {
//   if (window.pageYOffset  == 0.0 ) {
//     navbar1.classList.remove('hide');
//   } else{
//     navbar1.classList.add('hide');
//   }
// })
