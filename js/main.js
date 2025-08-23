// Main JavaScript for Bhatia Travels Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    initializeContactForms();
    initializeWhatsAppIntegration();
    initializeSmoothScrolling();
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
}

// Animation on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements that should animate
    document.querySelectorAll('.card, .hero-section > div').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Contact form handling
function initializeContactForms() {
    const contactForms = document.querySelectorAll('form[data-contact-form]');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', handleContactFormSubmit);
    });
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Show success message
        showNotification('Message sent successfully! We will contact you soon.', 'success');
        form.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// WhatsApp integration
function initializeWhatsAppIntegration() {
    // Add WhatsApp click handlers
    document.querySelectorAll('[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Track WhatsApp clicks (for analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'contact',
                    'event_label': this.href
                });
            }
        });
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
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
}

// Utility function to show notifications
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : 'info'} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Phone number formatting
function formatPhoneNumber(phone) {
    return phone.replace(/[^\d]/g, '');
}

// Generate WhatsApp URL with message
function generateWhatsAppURL(phone, message) {
    const cleanPhone = formatPhoneNumber(phone);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

// Package inquiry functionality
function inquirePackage(packageName, price) {
    const message = `Hi, I'm interested in the ${packageName} package (${price}). Please provide more information about the itinerary, inclusions, and booking process.`;
    const whatsappURL = generateWhatsAppURL('919814927575', message);
    window.open(whatsappURL, '_blank');
}

// Service inquiry functionality
function inquireService(serviceName, phone) {
    const message = `Hi, I'm interested in ${serviceName}. Please provide more information about your services and pricing.`;
    const whatsappURL = generateWhatsAppURL(phone, message);
    window.open(whatsappURL, '_blank');
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Search functionality (if needed)
function initializeSearch() {
    const searchInput = document.querySelector('#searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', debounce(function(e) {
        const query = e.target.value.toLowerCase();
        // Implement search logic here
        console.log('Searching for:', query);
    }, 300));
}

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Modal functionality for package details
function showPackageModal(packageData) {
    const modalHTML = `
        <div class="modal fade" id="packageModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${packageData.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${packageData.image}" class="img-fluid rounded mb-3" alt="${packageData.name}">
                        <p class="lead">${packageData.description}</p>
                        <h6>Package Highlights:</h6>
                        <ul>
                            ${packageData.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                        </ul>
                        <div class="alert alert-info">
                            <strong>Price: ${packageData.price} onwards</strong>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" onclick="inquirePackage('${packageData.name}', '${packageData.price}')">
                            Inquire Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.querySelector('#packageModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add new modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.querySelector('#packageModal'));
    modal.show();
}

// Initialize tooltips and popovers
function initializeBootstrapComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Call initialization functions
document.addEventListener('DOMContentLoaded', function() {
    initializeBootstrapComponents();
    initializeLazyLoading();
});

// Export functions for global use
window.BhatiaTravels = {
    inquirePackage,
    inquireService,
    showPackageModal,
    showNotification,
    generateWhatsAppURL
};