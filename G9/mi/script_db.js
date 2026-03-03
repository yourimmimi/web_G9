// รอให้หน้าเว็บโหลดเสร็จก่อนทำงาน
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page Loaded Successfully.");

    // Smooth scrolling สำหรับลิงก์ที่มี Hash (#)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Handling (Hamburger)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.background = 'white';
                navLinks.style.width = '100%';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                navLinks.style.zIndex = '999';
            }
        });
    }
});