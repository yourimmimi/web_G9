const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

/* =========================================
   MOBILE NAV
   ========================================= */
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
      navLinks.style.alignItems = '';
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

/* =========================================
   STACK 1 SLIDER
   ========================================= */
document.querySelectorAll('.work-slider').forEach((slider) => {
  const slides = slider.querySelectorAll('.work-slide');
  const dots = slider.querySelectorAll('.work-dot');
  const prevBtn = slider.querySelector('.work-slider-btn.prev');
  const nextBtn = slider.querySelector('.work-slider-btn.next');

  if (!slides.length) return;

  let current = 0;
  let autoSlide;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    current = index;
  };

  const goPrev = () => {
    const nextIndex = (current - 1 + slides.length) % slides.length;
    showSlide(nextIndex);
  };

  const goNext = () => {
    const nextIndex = (current + 1) % slides.length;
    showSlide(nextIndex);
  };

  const startAutoSlide = () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      goNext();
    }, 3500);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlide);
  };

  prevBtn?.addEventListener('click', () => {
    goPrev();
    startAutoSlide();
  });

  nextBtn?.addEventListener('click', () => {
    goNext();
    startAutoSlide();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      startAutoSlide();
    });
  });

  slider.addEventListener('mouseenter', stopAutoSlide);
  slider.addEventListener('mouseleave', startAutoSlide);

  showSlide(0);
  startAutoSlide();
});