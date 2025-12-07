    console.log("Booking page loaded.");

    // Get elements
    const bookingForm = document.getElementById("bookingForm");
    const planCards = document.querySelectorAll('.plan-card');
    const planInput = document.getElementById('plan');
    const dateInput = document.getElementById('date');
    const successPopup = document.getElementById('successPopup');
    const overlay = document.getElementById('overlay');
    const closePopupBtn = document.getElementById('closePopup');

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    // Plan card selection
    planCards.forEach(card => {
        card.addEventListener('click', () => {
            planCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            planInput.value = card.dataset.plan;
        });
    });

    // Form submission
    if (bookingForm) {
        bookingForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = this.name.value;
            const email = this.email.value;
            const phone = this.phone.value;
            const plan = this.plan.value;
            const date = this.date.value;
            const time = this.time.value;

            if (!name || !email || !phone || !plan || !date || !time) {
                alert("Please fill out all fields.");
                return;
            }

            // Format date for display
            const dateObj = new Date(date + 'T00:00:00');
            const formattedDate = dateObj.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });

            // Format time for display
            const timeObj = new Date('2000-01-01T' + time);
            const formattedTime = timeObj.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit',
                hour12: true 
            });

            // Update popup with booking details
            document.getElementById('bookingDetails').innerHTML = `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Plan:</strong> ${plan}</p>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Time:</strong> ${formattedTime}</p>
            `;

            // Show popup and overlay
            overlay.classList.add('show');
            successPopup.classList.add('show');

            // Reset form
            this.reset();
            planCards.forEach(c => c.classList.remove('selected'));
        });
    }

    // Close popup
    closePopupBtn.addEventListener('click', () => {
        overlay.classList.remove('show');
        successPopup.classList.remove('show');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
        successPopup.classList.remove('show');
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