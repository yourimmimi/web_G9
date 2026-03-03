// โหลด navbar.html เข้าไปใน div#navbar
fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        // หลังจากโหลดเสร็จ ค่อย activate hamburger
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
                    navLinks.style.top = '90px';
                    navLinks.style.right = '0';
                    navLinks.style.background = 'white';
                    navLinks.style.width = '100%';
                    navLinks.style.padding = '20px';
                    navLinks.style.boxShadow = '0 5px 5px rgba(0,0,0,0.1)';
                }
            });
        }
    });
