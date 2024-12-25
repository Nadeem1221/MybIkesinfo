// Smooth scrolling for navigation links
document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Update active link
        document.querySelectorAll('.nav__links a').forEach(link => {
            link.classList.remove('active');
        });
        link.classList.add('active');
    });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__links a[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav__links a[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// Handle form submission
const contactForm = document.querySelector('.contact__form');
const testRideForm = document.querySelector('.test-ride__container form');
const exchangeForm = document.querySelector('.exchange__container form');

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

if (testRideForm) {
    testRideForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for booking a test ride! We will contact you shortly to confirm your appointment.');
        testRideForm.reset();
    });
}

if (exchangeForm) {
    exchangeForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for your interest in exchanging your bike! Our team will evaluate your request and contact you with a quote.');
        exchangeForm.reset();
    });
} 