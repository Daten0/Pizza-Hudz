// Route to WhatsApp Contact
document.addEventListener('DOMContentLoaded', function() {
            
            const whatsappButton = document.getElementById('whatsapp-btn');
            
            function openWhatsApp() {
            
                const phoneNumber = '085143950535'.replace(/\D/g, '');
       
                const whatsappUrl = `https://wa.me/${phoneNumber}`;
            
                window.open(whatsappUrl, '_blank');
            }
            
            whatsappButton.addEventListener('click', openWhatsApp);
           
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                        this.classList.add('active');
                    }
                });
            });
            
            window.addEventListener('scroll', function() {
                const sections = document.querySelectorAll('article');
                let currentSection = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 100) {
                        currentSection = section.getAttribute('id');
                    }
                });
                
                document.querySelectorAll('nav a').forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href') === `#${currentSection}`) {
                        a.classList.add('active');
                    }
                });
            });
        });