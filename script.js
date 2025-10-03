// Loading screen
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').style.display = 'none';
    }, 3000);
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
});

closeMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
});

// Close mobile menu when clicking links
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});

// Smooth scroll function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('bg-white', 'shadow-lg');
    } else {
        nav.classList.remove('bg-white', 'shadow-lg');
    }
});
