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

// Smooth scrolling for navigation links (only for internal links)
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

// Initialize page when loaded
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
}); 

// Single Phone Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Toggle functionality
    const modeToggle = document.getElementById('mode-toggle');
    const requesterCarousel = document.getElementById('requester-carousel');
    const spotterCarousel = document.getElementById('spotter-carousel');
    
    modeToggle.addEventListener('change', () => {
        if (modeToggle.checked) {
            // Switch to Spotters
            requesterCarousel.style.display = 'none';
            spotterCarousel.style.display = 'block';
            resetCarousel('spotter');
        } else {
            // Switch to Requesters
            requesterCarousel.style.display = 'block';
            spotterCarousel.style.display = 'none';
            resetCarousel('requester');
        }
    });

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

    // Function to reset carousel when switching modes
    function resetCarousel(carouselType) {
        showSlide(carouselType, 0);
        resetInterval(carouselType);
    }

    // Start auto-play for the active carousel (requester by default)
    resetInterval('requester');

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