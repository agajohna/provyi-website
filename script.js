// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .workflow-step, .pricing-card, .technical-card, .interface-card');
    animatedElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
});

// Add loading animation to elements as they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.loading');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('loaded');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Phone mockup animation
const phoneMockup = document.querySelector('.phone-mockup');
if (phoneMockup) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        phoneMockup.style.transform = `translateY(${rate}px)`;
    });
}

// Map pins animation
const mapPins = document.querySelectorAll('.map-pin');
mapPins.forEach((pin, index) => {
    pin.style.animation = `pulse 2s ease-in-out ${index * 0.5}s infinite`;
});

// Add CSS animation for map pins
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.2);
            opacity: 0.7;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Pricing card hover effects
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Feature card hover effects
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.feature-icon');
        icon.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.feature-icon');
        icon.style.transform = '';
    });
});

// Download button click handler
const downloadButtons = document.querySelectorAll('.btn-primary');
downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Add your App Store link here
        // e.preventDefault();
        // window.open('YOUR_APP_STORE_LINK', '_blank');
        
        // For now, just show a message
        if (button.textContent.includes('Download')) {
            e.preventDefault();
            alert('App Store link will be added when the app is published!');
        }
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero-content h1');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Add counter animation for pricing
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

// Observe pricing cards for counter animation
const pricingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const priceElement = entry.target.querySelector('.price');
            if (priceElement) {
                const priceText = priceElement.textContent;
                const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
                if (!isNaN(price)) {
                    priceElement.textContent = '$0';
                    setTimeout(() => {
                        animateCounter(priceElement, price, 1500);
                    }, 500);
                }
            }
            pricingObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.pricing-card').forEach(card => {
    pricingObserver.observe(card);
});

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('btn-primary')) {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.pointerEvents = '';
            }, 2000);
        }
    });
});

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #ff6b35, #f7931e);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();

// Add back to top button
const createBackToTop = () => {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-3px)';
        backToTop.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0)';
        backToTop.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    });
};

createBackToTop();

// Initialize all animations when page loads
window.addEventListener('load', () => {
    // Trigger initial animation check
    animateOnScroll();
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
}); 

// Dual Screenshot Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Carousel configuration
    const carousels = {
        requester: {
            slides: document.querySelectorAll('#requester-carousel .carousel-slide'),
            dots: document.querySelectorAll('#requester-carousel .dot'),
            currentSlide: 0,
            interval: null
        },
        spotter: {
            slides: document.querySelectorAll('#spotter-carousel .carousel-slide'),
            dots: document.querySelectorAll('#spotter-carousel .dot'),
            currentSlide: 0,
            interval: null
        }
    };

    // Function to show a specific slide for a carousel
    function showSlide(carouselType, index) {
        const carousel = carousels[carouselType];
        
        // Remove active class from all slides and dots
        carousel.slides.forEach(slide => slide.classList.remove('active'));
        carousel.dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        carousel.slides[index].classList.add('active');
        carousel.dots[index].classList.add('active');
        
        carousel.currentSlide = index;
    }

    // Function to go to next slide for a carousel
    function nextSlide(carouselType) {
        const carousel = carousels[carouselType];
        const nextIndex = (carousel.currentSlide + 1) % carousel.slides.length;
        showSlide(carouselType, nextIndex);
    }

    // Function to go to previous slide for a carousel
    function prevSlide(carouselType) {
        const carousel = carousels[carouselType];
        const prevIndex = (carousel.currentSlide - 1 + carousel.slides.length) % carousel.slides.length;
        showSlide(carouselType, prevIndex);
    }

    // Add click event listeners to dots for both carousels
    Object.keys(carousels).forEach(carouselType => {
        const carousel = carousels[carouselType];
        carousel.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(carouselType, index);
                resetInterval(carouselType);
            });
        });
    });

    // Function to reset the auto-play interval for a specific carousel
    function resetInterval(carouselType) {
        const carousel = carousels[carouselType];
        clearInterval(carousel.interval);
        
        // Different intervals for each carousel to create visual variety
        const interval = carouselType === 'requester' ? 3500 : 4000;
        carousel.interval = setInterval(() => nextSlide(carouselType), interval);
    }

    // Start auto-play for both carousels
    Object.keys(carousels).forEach(carouselType => {
        resetInterval(carouselType);
    });

    // Pause auto-play on hover for both carousels
    Object.keys(carousels).forEach(carouselType => {
        const carouselElement = document.getElementById(`${carouselType}-carousel`);
        if (carouselElement) {
            carouselElement.addEventListener('mouseenter', () => {
                clearInterval(carousels[carouselType].interval);
            });
            
            carouselElement.addEventListener('mouseleave', () => {
                resetInterval(carouselType);
            });
        }
    });
}); 