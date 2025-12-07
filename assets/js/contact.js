console.log("Contact page loaded.");

    // Get elements
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    // Form submission
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = this.name.value;
            const email = this.email.value;
            const message = this.message.value;

            if (!name || !email || !message) {
                alert("Please fill out all fields.");
                return;
            }

            // Show success message
            successMessage.classList.add('show');

            // Hide success message after 4 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 4000);

            // Reset form
            this.reset();
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Animate info cards on scroll
    const observerOptions = {
        threshold: 0.2,
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

    document.querySelectorAll('.info-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });