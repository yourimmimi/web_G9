const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

dropdownMenus.forEach((menu) => {
  const trigger = menu.querySelector('.dropbtn');

  if (trigger) {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        menu.classList.toggle('open');
      }
    });
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks?.classList.remove('active');
    dropdownMenus.forEach((menu) => menu.classList.remove('open'));
  }
});