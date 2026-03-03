const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.alignItems = 'flex-start';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '90px';
        navLinks.style.right = '0';
        navLinks.style.left = '0';
        navLinks.style.background = 'white';
        navLinks.style.width = '100%';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 5px 5px rgba(0,0,0,0.1)';
        navLinks.style.zIndex = '999';
      }
    }
  });
}

dropdownMenus.forEach((menu) => {
  const trigger = menu.querySelector('.dropbtn');

  if (trigger) {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();

        /* ปิดอันอื่นก่อน */
        dropdownMenus.forEach((otherMenu) => {
          if (otherMenu !== menu) {
            otherMenu.classList.remove('open');
          }
        });

        menu.classList.toggle('open');
      }
    });
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    if (navLinks) {
      navLinks.style.display = '';
      navLinks.style.flexDirection = '';
      navLinks.style.position = '';
      navLinks.style.top = '';
      navLinks.style.right = '';
      navLinks.style.left = '';
      navLinks.style.background = '';
      navLinks.style.width = '';
      navLinks.style.padding = '';
      navLinks.style.boxShadow = '';
      navLinks.style.zIndex = '';
    }

    dropdownMenus.forEach((menu) => menu.classList.remove('open'));
  }
});