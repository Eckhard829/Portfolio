// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
        mobileToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.nav-menu.mobile .nav-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (mobileToggle && mobileMenu) {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Code Rain Effect
function createCodeRain() {
    const codeRainContainer = document.getElementById('code-rain');
    if (!codeRainContainer) return;

    // Code strings that will fall
    const codeStrings = [
        'function()\n{\n  return true;\n}',
        'const data =\n{\n  user: "dev",\n  active: true\n};',
        'if(condition)\n{\n  execute();\n}',
        'import React\nfrom "react";',
        'npm install\n--save-dev',
        'git commit -m\n"feature update"',
        'SELECT * FROM\nusers WHERE\nactive = 1;',
        'docker run -d\n--name app\nmyapp:latest',
        'console.log(\n"Hello World"\n);',
        'mkdir project\ncd project\nnpm init -y',
        '<div className=\n"container">\n</div>',
        'async function\nfetchData() {\n  const res =\n  await api.get();\n}',
        'export default\ncomponent;',
        '// TODO: Fix\n// this bug\n// ASAP',
        'python3 -m pip\ninstall django',
        'curl -X POST\n-H "Content-Type:\napplication/json"'
    ];

    function createCodeDrop() {
        const codeDrop = document.createElement('div');
        codeDrop.className = 'code-drop';
        
        // Random code string
        const randomCode = codeStrings[Math.floor(Math.random() * codeStrings.length)];
        codeDrop.textContent = randomCode;
        
        // Random position and speed
        const startPos = Math.random() * window.innerWidth;
        const duration = Math.random() * 15 + 10; // 10-25 seconds
        const delay = Math.random() * 2;
        
        codeDrop.style.left = startPos + 'px';
        codeDrop.style.animationDuration = duration + 's';
        codeDrop.style.animationDelay = delay + 's';
        
        // Random opacity for depth effect
        codeDrop.style.opacity = Math.random() * 0.3 + 0.1;
        
        codeRainContainer.appendChild(codeDrop);
        
        // Remove after animation
        setTimeout(() => {
            if (codeDrop.parentNode) {
                codeDrop.remove();
            }
        }, (duration + delay) * 1000);
    }
    
    // Create initial drops
    for (let i = 0; i < 8; i++) {
        setTimeout(createCodeDrop, i * 2000);
    }
    
    // Continue creating drops
    setInterval(createCodeDrop, 3000);
}

// Terminal typing effect
function typeText(element, text, speed = 50) {
    return new Promise(resolve => {
        if (!element) {
            resolve();
            return;
        }
        let i = 0;
        element.textContent = '';
        const timer = setInterval(() => {
            element.textContent += text[i];
            i++;
            if (i === text.length) {
                clearInterval(timer);
                resolve();
            }
        }, speed);
    });
}

function displayText(element, text, delay = 0) {
    return new Promise(resolve => {
        if (!element) {
            resolve();
            return;
        }
        setTimeout(() => {
            element.textContent = text;
            resolve();
        }, delay);
    });
}

// Terminal animation sequence
async function startTerminalAnimation() {
    // Wait a bit before starting
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Command 1: whoami
    const command1 = document.getElementById('command1');
    const output1 = document.getElementById('output1');
    if (command1 && output1) {
        await typeText(command1, 'whoami', 100);
        await new Promise(resolve => setTimeout(resolve, 500));
        await displayText(output1, 'Full Stack Developer');
    }
    
    // Command 2: cat skills.txt
    const command2 = document.getElementById('command2');
    const output2_1 = document.getElementById('output2-1');
    const output2_2 = document.getElementById('output2-2');
    if (command2 && output2_1 && output2_2) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await typeText(command2, 'cat skills.txt', 100);
        await new Promise(resolve => setTimeout(resolve, 500));
        await displayText(output2_1, 'JavaScript | React | Node.js | MongoDB');
        await new Promise(resolve => setTimeout(resolve, 200));
        await displayText(output2_2, 'HTML5 | CSS3 | Git | Firebase');
    }
    
    // Command 3: echo message
    const command3 = document.getElementById('command3');
    const output3 = document.getElementById('output3');
    if (command3 && output3) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await typeText(command3, 'echo "Building amazing web solutions"', 100);
        await new Promise(resolve => setTimeout(resolve, 500));
        await displayText(output3, 'Building amazing web solutions');
    }
    
    // Show final cursor
    const finalCursor = document.getElementById('final-cursor');
    if (finalCursor) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        finalCursor.style.display = 'inline-block';
    }
}

// Create floating particles
function createParticle() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 20000);
}

// Create particles periodically
setInterval(createParticle, 3000);

// Enhanced form submission with better validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!fullName || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        const submitBtn = this.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span class="btn-icon">✓</span>Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #27ca3f, #00E6F0)';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            this.reset();
        }, 3000);
    });
    
    // Add real-time validation feedback
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = 'rgba(255, 95, 86, 0.5)';
            } else {
                this.style.borderColor = 'rgba(0, 230, 240, 0.3)';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '#00E6F0';
        });
    });
}

// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Start terminal animation
    startTerminalAnimation();
    
    // Start code rain effect
    createCodeRain();
    
    // Add some initial particles
    for (let i = 0; i < 5; i++) {
        setTimeout(createParticle, i * 1000);
    }

    // Add scroll animations for experience items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe items for scroll animation
    const animatedElements = document.querySelectorAll('.experience-item, .certification-card, .project-card, .contact-info-card');
    animatedElements.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Add hover effects for experience timeline dots
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Enhanced skill category hover effects
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add dynamic glow effects on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effect for particles
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.transform = `translateY(${rate}px)`;
        });
        
        // Update navbar active link based on scroll position
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrolled >= sectionTop && scrolled < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Add typing cursor animation to terminal
    const cursor = document.getElementById('final-cursor');
    if (cursor) {
        cursor.style.display = 'none'; // Initially hidden
    }

    // Progressive enhancement for animations
    if ('IntersectionObserver' in window) {
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            });
        }, { threshold: 0.1 });

        const statBoxes = document.querySelectorAll('.stat-box');
        statBoxes.forEach(box => {
            fadeInObserver.observe(box);
        });
    }

    // Add glitch effect to certain elements
    const glitchElements = document.querySelectorAll('.name, .nav-logo');
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.textShadow = `
                0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                0.025em 0.05em 0 rgba(0, 0, 255, 0.75)
            `;
            setTimeout(() => {
                this.style.textShadow = '';
            }, 200);
        });
    });

    // Typewriter effect for stats
    function animateNumber(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            
            if (element.textContent.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else if (element.textContent.includes('∞')) {
                element.textContent = '∞';
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target.querySelector('.stat-number');
                const text = number.textContent;
                
                if (text.includes('5+')) {
                    number.textContent = '0+';
                    animateNumber(number, 0, 5, 2000);
                } else if (text === '3') {
                    number.textContent = '0';
                    animateNumber(number, 0, 3, 1500);
                } else if (text.includes('100+')) {
                    number.textContent = '0+';
                    animateNumber(number, 0, 100, 2500);
                }
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statBoxes2 = document.querySelectorAll('.stat-box');
    statBoxes2.forEach(box => {
        statsObserver.observe(box);
    });

    // Add binary rain to background occasionally
    function createBinaryRain() {
        const body = document.body;
        const binary = document.createElement('div');
        binary.style.position = 'fixed';
        binary.style.top = '-50px';
        binary.style.left = Math.random() * window.innerWidth + 'px';
        binary.style.color = 'rgba(0, 230, 240, 0.1)';
        binary.style.fontSize = '12px';
        binary.style.fontFamily = 'monospace';
        binary.style.zIndex = '-1';
        binary.style.pointerEvents = 'none';
        binary.textContent = Math.random() > 0.5 ? '1' : '0';
        binary.style.animation = 'fall 8s linear forwards';
        
        body.appendChild(binary);
        
        setTimeout(() => {
            if (binary.parentNode) {
                binary.remove();
            }
        }, 8000);
    }

    // Create binary rain occasionally
    setInterval(createBinaryRain, 500);

    // FIXED: Enhanced CV button functionality with ripple effect but allows PDF download
    const cvButton = document.querySelector('.cv-button');
    if (cvButton) {
        cvButton.addEventListener('click', function(e) {
            // DON'T prevent default - let the PDF link work naturally
            
            // Create a ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.marginLeft = '-25px';
            ripple.style.marginTop = '-25px';
            ripple.style.width = '50px';
            ripple.style.height = '50px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Let the browser handle the PDF link naturally - no scrolling to contact
        });
    }
});

// Add dynamic particle generation based on mouse movement
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Occasionally create particles near mouse
    if (Math.random() < 0.001) {
        createMouseParticle(mouseX, mouseY);
    }
});

function createMouseParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.animation = 'mouseParticleFade 2s ease-out forwards';
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 2000);
}

// Add CSS animations for new effects
const style = document.createElement('style');
style.textContent = `
    @keyframes mouseParticleFade {
        0% {
            opacity: 0.8;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-30px);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: #00E6F0 !important;
        text-shadow: 0 0 10px rgba(0, 230, 240, 0.5) !important;
    }
    
    .nav-link.active::after {
        width: 80% !important;
    }
`;
document.head.appendChild(style);