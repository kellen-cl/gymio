// Animated Stats Counter
    function animateCounter(id, target) {
      const element = document.getElementById(id);
      let count = 0;
      const increment = target / 100;
      const duration = 2000;
      const stepTime = duration / 100;

      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(timer);
        }
        element.innerText = Math.floor(count);
      }, stepTime);
    }

    // Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter("stat1", 350);
          animateCounter("stat2", 1200);
          animateCounter("stat3", 560);
          animateCounter("stat4", 7);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    // Before/After Slider
    const slider = document.getElementById("slider");
    const beforeImg = document.getElementById("beforeImg");
    
    if (slider && beforeImg) {
      slider.addEventListener("input", (e) => {
        const value = e.target.value;
        beforeImg.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      });
    }

    // Smooth scroll for navigation
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // Only prevent default for hash links (internal page navigation)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Let other links (index.html, services.html, etc.) work normally
    });
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}
