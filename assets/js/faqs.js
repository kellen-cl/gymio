    console.log("FAQs page loaded.");

    // Get elements
    const faqItems = document.querySelectorAll('.faq-item');
    const searchInput = document.getElementById('faqSearchInput');
    const categoryTags = document.querySelectorAll('.category-tag');
    const noResults = document.getElementById('noResults');
    const faqContainer = document.getElementById('faqContainer');

    // FAQ accordion functionality
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current FAQ
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        let visibleCount = 0;

        // Reset category filter
        if (searchTerm.length > 0) {
            categoryTags.forEach(tag => tag.classList.remove('active'));
            categoryTags[0].classList.add('active');
        }

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();

            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        // Show/hide no results message
        if (visibleCount === 0) {
            noResults.style.display = 'block';
            faqContainer.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            faqContainer.style.display = 'block';
        }
    });

    // Category filter
    categoryTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Update active tag
            categoryTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');

            const category = tag.dataset.category;
            let visibleCount = 0;

            // Clear search
            searchInput.value = '';

            // Filter FAQs
            faqItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            // Show/hide no results
            if (visibleCount === 0) {
                noResults.style.display = 'block';
                faqContainer.style.display = 'none';
            } else {
                noResults.style.display = 'none';
                faqContainer.style.display = 'block';
            }
        });
    });

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