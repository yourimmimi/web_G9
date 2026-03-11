const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

        if (hamburger && navLinks) {
                hamburger.addEventListener('click', () => {
                    
                    if (navLinks.style.display === 'flex') {
                        navLinks.style.display = 'none';
                    } else {
                        navLinks.style.display = 'flex';
                        navLinks.style.flexDirection = 'column';
                        navLinks.style.position = 'absolute';
                        navLinks.style.top = '90px';
                        navLinks.style.right = '0';
                        navLinks.style.background = 'white';
                        navLinks.style.width = '100%';
                        navLinks.style.padding = '20px';
                        navLinks.style.boxShadow = '0 5px 5px rgba(0,0,0,0.1)';
                    }
                });
            }

dropdownMenus.forEach((menu) => { /*เปิดปิดเมนูย่อยบนมือถือ*/
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

// สำหรับปิดเมนูอัตโนมัติเมื่อกดลิงก์//
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
