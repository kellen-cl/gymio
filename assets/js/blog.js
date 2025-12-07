console.log("Blog page loaded.");

    // Get elements
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogPosts = document.querySelectorAll('.blog-post');
    const searchInput = document.getElementById('blogSearch');
    const noResults = document.getElementById('noResults');

    // Filter by category
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;
            let visibleCount = 0;

            // Clear search when filtering
            searchInput.value = '';

            // Filter posts
            blogPosts.forEach((post, index) => {
                if (category === 'all' || post.dataset.category === category) {
                    post.style.display = 'block';
                    post.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s backwards`;
                    visibleCount++;
                } else {
                    post.style.display = 'none';
                }
            });

            // Show/hide no results message
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        });
    });

    // Search filter
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const term = searchInput.value.toLowerCase();
            let visibleCount = 0;

            // Reset category filter to 'all' when searching
            if (term.length > 0) {
                categoryButtons.forEach(b => b.classList.remove('active'));
                categoryButtons[0].classList.add('active');
            }

            blogPosts.forEach(post => {
                const title = post.querySelector('h3').innerText.toLowerCase();
                const content = post.querySelector('p').innerText.toLowerCase();
                const category = post.querySelector('.blog-category-tag').innerText.toLowerCase();

                if (title.includes(term) || content.includes(term) || category.includes(term)) {
                    post.style.display = 'block';
                    visibleCount++;
                } else {
                    post.style.display = 'none';
                }
            });

            // Show/hide no results message
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
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

    // Animate blog posts on scroll
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

    blogPosts.forEach(post => {
        observer.observe(post);
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
