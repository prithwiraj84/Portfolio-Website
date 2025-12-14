// ===== Theme Toggle =====
const themeBtn = document.getElementById('theme-btn');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeBtn.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px var(--shadow-lg)';
    } else {
        navbar.style.boxShadow = '0 2px 20px var(--shadow)';
    }
    
    lastScroll = currentScroll;
});

// ===== Skill Bars Animation =====
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width + '%';
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===== Circular Progress Bars =====
const circleProgresses = document.querySelectorAll('.circle-progress');
const circleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const percent = entry.target.getAttribute('data-percent');
            const circle = entry.target.querySelector('.progress-ring-circle');
            const circumference = 2 * Math.PI * 66; // radius = 66 (150/2 - 8)
            const offset = circumference - (percent / 100) * circumference;
            
            circle.style.strokeDashoffset = offset;
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

circleProgresses.forEach(circle => {
    circleObserver.observe(circle);
});

// ===== Project Cards Animation =====
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    projectObserver.observe(card);
});

// ===== Initialize EmailJS =====
// Replace "YOUR_PUBLIC_KEY" with your actual Public Key from EmailJS
(function() {
    emailjs.init({
        publicKey: "M-pG1eokc_JH76dp-",
    });
})();

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get values for validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Get the submit button to change its state
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // EmailJS Configuration
    const serviceID = 'service_kuia2et'; // Replace with your Service ID
    const templateID = 'template_dw0riep'; // Replace with your Template ID

    // Send the form
    emailjs.sendForm(serviceID, templateID, contactForm)
        .then(() => {
            // Success!
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, (err) => {
            // Error
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            showNotification('Failed to send message. Please try again.', 'error');
            console.log('FAILED...', JSON.stringify(err));
        });
});
// ===== Notification System =====
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Typing Animation for Home Section =====
const typingElements = document.querySelectorAll('.name, .role');
typingElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--accent-color)';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 500);
        }
    };
    
    // Start typing animation when element is visible
    const typingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && i === 0) {
                setTimeout(typeWriter, 500);
                typingObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    typingObserver.observe(element);
});

// ===== Parallax Effect =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// ===== Active Nav Link Highlighting =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// ===== Resume Download Handler =====
const resumeDownload = document.getElementById('resume-download');
if (resumeDownload) {
    resumeDownload.addEventListener('click', (e) => {
        // Open resume in new tab - user can print as PDF
        // Alternatively, you can use a PDF generation library here
        setTimeout(() => {
            showNotification('Resume opened. Use Ctrl+P (Cmd+P on Mac) to save as PDF', 'success');
        }, 500);
    });
}

// ===== Profile Image Fallback =====
const profileImg = document.getElementById('profile-img');
if (profileImg) {
    profileImg.addEventListener('error', function() {
        // If image fails to load, hide img and show icon
        this.style.display = 'none';
        const profileImageDiv = this.parentElement;
        const icon = document.createElement('i');
        icon.className = 'fas fa-user';
        profileImageDiv.appendChild(icon);
    });
}

// ===== Add CSS for notification and scroll top button =====
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 100px;
        right: -400px;
        background: var(--card-bg);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px var(--shadow-lg);
        z-index: 10000;
        transition: right 0.3s ease;
        border-left: 4px solid var(--accent-color);
    }
    
    .notification.show {
        right: 20px;
    }
    
    .notification-success {
        border-left-color: #10b981;
    }
    
    .notification-error {
        border-left-color: #ef4444;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
    
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--accent-color);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    }
    
    .scroll-top-btn.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top-btn:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
    }
    
    .nav-link.active {
        color: var(--accent-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .notification {
            right: -100%;
            left: 20px;
            right: 20px;
            width: calc(100% - 40px);
        }
        
        .notification.show {
            right: 20px;
        }
        
        .scroll-top-btn {
            bottom: 20px;
            right: 20px;
        }
    }
`;
document.head.appendChild(style);


