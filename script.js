// Research Publications Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initFormHandling();
    initAnimations();
    initMobileNavigation();
    initPublicationFilters();
    initCodeHighlighting();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form handling for contact form
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            this.reset();
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification messages
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
}

// Initialize animations and scroll effects
function initAnimations() {
    // Intersection Observer for fade-in animations
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
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.research-card, .publication-item, .team-member');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Mobile navigation toggle
function initMobileNavigation() {
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    navToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--primary-color);
        cursor: pointer;
        padding: 0.5rem;
    `;
    
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    
    // Insert toggle button before nav menu
    navContainer.insertBefore(navToggle, navMenu);
    
    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('nav-menu-open');
        this.innerHTML = navMenu.classList.contains('nav-menu-open') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars">';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navContainer.contains(e.target)) {
            navMenu.classList.remove('nav-menu-open');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Responsive navigation styles
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-toggle {
                display: block !important;
            }
            
            .nav-menu {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 1rem;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                transform: translateY(-100%);
                opacity: 0;
                transition: all 0.3s ease;
                pointer-events: none;
            }
            
            .nav-menu.nav-menu-open {
                transform: translateY(0);
                opacity: 1;
                pointer-events: all;
            }
            
            .nav-menu li {
                margin: 0.5rem 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Publication filtering system
function initPublicationFilters() {
    // Create filter controls
    const publicationsSection = document.querySelector('.publications');
    const filterControls = document.createElement('div');
    filterControls.className = 'filter-controls';
    filterControls.innerHTML = `
        <div class="filter-group">
            <label for="year-filter">Year:</label>
            <select id="year-filter">
                <option value="">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
            </select>
        </div>
        <div class="filter-group">
            <label for="type-filter">Type:</label>
            <select id="type-filter">
                <option value="">All Types</option>
                <option value="Conference">Conference</option>
                <option value="Journal">Journal</option>
            </select>
        </div>
        <div class="filter-group">
            <label for="search-filter">Search:</label>
            <input type="text" id="search-filter" placeholder="Search publications...">
        </div>
    `;
    
    // Insert filter controls before publications list
    const publicationsList = publicationsSection.querySelector('.publications-list');
    publicationsSection.querySelector('.container').insertBefore(filterControls, publicationsList);
    
    // Add filter styles
    const filterStyle = document.createElement('style');
    filterStyle.textContent = `
        .filter-controls {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
            align-items: center;
        }
        
        .filter-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .filter-group label {
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--text-secondary);
        }
        
        .filter-group select,
        .filter-group input {
            padding: 0.5rem;
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            font-size: 0.875rem;
        }
        
        .filter-group select:focus,
        .filter-group input:focus {
            outline: none;
            border-color: var(--primary-color);
        }
        
        @media (max-width: 768px) {
            .filter-controls {
                flex-direction: column;
                align-items: stretch;
            }
        }
    `;
    document.head.appendChild(filterStyle);
    
    // Filter functionality
    const yearFilter = document.getElementById('year-filter');
    const typeFilter = document.getElementById('type-filter');
    const searchFilter = document.getElementById('search-filter');
    
    function filterPublications() {
        const year = yearFilter.value;
        const type = typeFilter.value;
        const search = searchFilter.value.toLowerCase();
        
        const publications = document.querySelectorAll('.publication-item');
        
        publications.forEach(pub => {
            const pubYear = pub.querySelector('.pub-year').textContent;
            const pubType = pub.querySelector('.pub-type').textContent;
            const pubTitle = pub.querySelector('.pub-title').textContent.toLowerCase();
            const pubAuthors = pub.querySelector('.pub-authors').textContent.toLowerCase();
            const pubAbstract = pub.querySelector('.pub-abstract p').textContent.toLowerCase();
            
            const yearMatch = !year || pubYear === year;
            const typeMatch = !type || pubType === type;
            const searchMatch = !search || 
                pubTitle.includes(search) || 
                pubAuthors.includes(search) || 
                pubAbstract.includes(search);
            
            if (yearMatch && typeMatch && searchMatch) {
                pub.style.display = 'block';
                pub.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                pub.style.display = 'none';
            }
        });
    }
    
    // Add event listeners
    yearFilter.addEventListener('change', filterPublications);
    typeFilter.addEventListener('change', filterPublications);
    searchFilter.addEventListener('input', filterPublications);
}

// Code syntax highlighting
function initCodeHighlighting() {
    const codeBlocks = document.querySelectorAll('.code-block code');
    
    codeBlocks.forEach(block => {
        const code = block.textContent;
        
        // Simple syntax highlighting for the demo code
        const highlightedCode = code
            .replace(/\b(class|string|function|return|if|else|for|while|const|let|var)\b/g, '<span class="keyword">$1</span>')
            .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
            .replace(/\/\/.*$/gm, '<span class="comment">$&</span>');
        
        block.innerHTML = highlightedCode;
    });
}

// Statistics counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Initialize counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Add CSS animations
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
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
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(animationStyle);

// Export functions for potential external use
window.ResearchWebsite = {
    showNotification,
    filterPublications: () => {
        // Trigger publication filtering
        const event = new Event('change');
        document.getElementById('year-filter').dispatchEvent(event);
    },
    animateCounters
};
