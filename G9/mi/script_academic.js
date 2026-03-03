document.addEventListener('DOMContentLoaded', () => {
    
    const programsData = [
        {
            id: 'iotmimi', 
            type: 'BACHELOR OF ENGINEERING',
            title: 'IOT AND INFORMATION SYSTEMS ENGINEERING',
            img: 'photo/iot.jpg', 
            link: 'iot.html' 
        },
        {
            id: 'db-degreemimi',
            type: 'DUAL DEGREE',
            title: 'B.SC. INDUSTRIAL PHYSICS AND B.ENG. IOT SYSTEM AND INFORMATION ENGINEERING',
            img: 'photo/dbdegree.jpg',
            link: 'dbdegree.html'
        },
        {
            id: 'comconmimi',
            type: 'BACHELOR OF ENGINEERING',
            title: 'COMPUTER AND IOT ENGINEERING (CONTINUING PROGRAM)',
            img: 'photo/comcon.jpg',
            link: 'comcon.html'
        }
    ];

    const newsData = [
{ 
    title: 'ภาพบรรยากาศ IoTE Camp ครั้งที่ 2', 
    desc: '📸✨ภาพบรรยากาศ IoTE Camp ครั้งที่ 2 มาแล้ววว ✨📸\nhttps://drive.google.com/.../1cJuu_fa-O...\nหวังว่าน้องๆ ทุกคนจะได้รับความสนุก ความรู้ และประสบการณ์กันแบบเต็มที่ ไม่ว่าจะเป็นด้าน IoT, Electronics,  Computer Programming, Web & Mobile App Development ซึ่งล้วนเป็นพื้นฐานสำคัญในโลกของ Internet of Things 🚀\nและหวังอีกว่าค่ายนี้จะเป็นอีกหนึ่งก้าวสำคัญที่ช่วยจุดประกายความฝัน และสร้างแรงบันดาลใจให้น้องๆ บนเส้นทางสายเทคโนโลยี\nขอบคุณอาจารย์ วิทยากร พี่ๆ น้องๆ ทุกคนที่ทำให้ IoTE Camp ครั้งที่ 2 สำเร็จลุล่วงด้วยดี 🙏✨\nเจอกันใหม่ปีหน้านะคะ ขอบคุณค่าาาาา 😻👋💫\nติดตามข่าวสารและรายละเอียดต่าง ๆ ได้ที่\nFB : Department of IoT and Information Engineering, KMITL\nIG : kmitl.iote.official\n#IoTECamp #IoTECamp2 #IoTE #Engineering #KMITL #วิศวลาดกระบัง',
    img: 'photo/news1.jpg' 
},
{ 
    title: 'ขอแสดงความยินดีกับศาสตราจารย์ ดร.อภิรัฐ ศิริธราธิวัตร คณะวิศวกรรมศาสตร์ สจล ', 
    desc: '🎉 ขอแสดงความยินดีกับศาสตราจารย์ ดร.อภิรัฐ ศิริธราธิวัตร คณะวิศวกรรมศาสตร์ สจล\nได้รับ #รางวัลนักวิจัยดีเด่นแห่งชาติ ประจำปี 2569\nสาขาวิศวกรรมศาสตร์และอุตสาหกรรมวิจัย\nจาก สำนักงานการวิจัยแห่งชาติ (วช.)\nในโอกาสนี้ ศ. ดร.วิษณุ เพชรภา\nรองอธิการบดีฝ่ายวิจัยและนวัตกรรม\nได้มอบดอกไม้แสดงความยินดี ร่วมกับคณบดีคณะวิศวกรรมศาสตร์\nและทีมผู้บริหาร ณ คณะวิศวกรรมศาสตร์\n✨KRIS ขอร่วมแสดงความภาคภูมิใจ\nในความสำเร็จครั้งนี้ และขอยืนยันเจตนารมณ์ในการสนับสนุน ส่งเสริม\nและผลักดันนักวิจัยของสถาบันให้ก้าวสู่การเป็นกำลังสำคัญในการสร้างสรรค์ผลงานวิจัยอันทรงคุณค่า\nเพื่อยกระดับความสามารถในการแข่งขันของประเทศ และสร้างชื่อเสียงให้แก่วงการวิจัยไทยในระดับชาติและนานาชาติต่อไป\nhttps://kris.kmitl.ac.th/5329/\n___________________________________________\n🧡 #นักวิจัยลาดกระบัง #สจล #KMITL #KMITLFIGHT #KRIS2026 #KRISKMITL  #TheWorldMasterOfInnovation #KMITLResearch #สำนักวิจัยสจล #NationalResearchAwards2569 #วช #รางวัลการวิจัยแห่งชาติ2569  #นักวิจัยไทย #งานวิจัยสู่สากล #ResearchExcellence #ProudlyKMITL',
    img: 'photo/news2.jpg'
},
{ 
    title: 'เปิดรับสมัครนักศึกษาใหม่ ป.ตรี วิศวะ IoT & IT ลาดกระบัง ประจำปี 2569', 
    desc: '📣 รับสมัคร นศ. ป.ตรี วิศวะ IoT & IT ลาดกระบัง (วันสุดท้าย 20 ม.ค. 69)\nโอกาสสุดท้ายแล้วนะน้องๆ #Dek69! 📢 ใครที่มีพอร์ตพร้อม ใจพร้อม อยากเรียน วิศวกรรมไอโอทีและสารสนเทศ ที่ สจล. ต้องรีบยื่นใบสมัครด่วนๆ!\n📍 ภาควิชาวิศวกรรมไอโอทีและสารสนเทศ คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง\n⏰ หมดเขต: 20 มกราคม 2569 (อย่ารอยื่นนาทีสุดท้ายนะ!)\n👇 จิ้มลิงก์สมัครเลย: https://admission.reg.kmitl.ac.th/\nประกาศรับสมัคร : https://www.reg.kmitl.ac.th/.../2569_1_news1_4112_2025_11...\n(*หน้า 23 เป็นต้นไป ฉบับเพิ่มเติม)\n#TCAS69 #วิศวะลาดกระบัง #IoTKiMTL #KMITL #Dek69 #Portfolio',
    img: 'photo/news3.jpg'
}
    ];


    const programContainer = document.getElementById('program-container');
    if(programContainer) {
        programContainer.innerHTML = ''; // เคลียร์ Loading...
        programsData.forEach(program => {
            const cardHTML = `
                <a href="${program.link}" class="program-card-link">
                    <div class="program-card" data-target="${program.id}">
                        <img src="${program.img}" alt="${program.title}" class="card-img">
                        <div class="card-content">
                            <span class="card-tag">${program.type}</span>
                            <h4 class="card-title">${program.title}</h4>
                        </div>
                    </div>
                </a>
            `;
            programContainer.innerHTML += cardHTML;
        });
    }

    const newsContainer = document.getElementById('news-container');
    const modal = document.getElementById('news-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = document.querySelector('.close-btn');

    if(newsContainer) {
        newsContainer.innerHTML = ''; 
        
        newsData.forEach((news, index) => {
            const newsHTML = `
                <div class="news-card" data-index="${index}">
                    <img src="${news.img}" alt="News">
                    <p>${news.title}</p>
                </div>
            `;
            newsContainer.innerHTML += newsHTML;
        });


        const newsCards = document.querySelectorAll('.news-card');
        newsCards.forEach(card => {
            card.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                const selectedNews = newsData[index];
                
           
                modalImg.src = selectedNews.img;
                modalTitle.innerText = selectedNews.title;
                modalDesc.innerText = selectedNews.desc;
                
           
                modal.style.display = "block";
            });
        });
    }

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        const navbarContainer = document.getElementById('navbar');
        if (navbarContainer) {
            navbarContainer.innerHTML = data;

            // ย้าย Logic Hamburger มาไว้ที่นี่!
            const hamburger = navbarContainer.querySelector('.hamburger');
            const navLinks = navbarContainer.querySelector('.nav-links');

            if (hamburger && navLinks) {
                hamburger.addEventListener('click', () => {
                    // แนะนำให้ใช้การ Toggle Class แทนการแก้ Style โดยตรงจะจัดการง่ายกว่าครับ
                    if (navLinks.style.display === 'flex') {
                        navLinks.style.display = 'none';
                    } else {
                        navLinks.style.display = 'flex';
                        navLinks.style.flexDirection = 'column';
                        navLinks.style.position = 'absolute';
                        navLinks.style.top = '60px';
                        navLinks.style.right = '0';
                        navLinks.style.background = 'white';
                        navLinks.style.width = '100%';
                        navLinks.style.padding = '20px';
                        navLinks.style.boxShadow = '0 5px 5px rgba(0,0,0,0.1)';
                    }
                });
            }
        }
    })
    .catch(error => console.error('Error loading navbar:', error));
});