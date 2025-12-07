console.log("Services page loaded.");

    // Class schedule data
    const scheduleData = {
        monday: [
            { time: "6:00 AM", name: "Morning Yoga", trainer: "Lisa Wong" },
            { time: "9:00 AM", name: "HIIT Training", trainer: "Mike Smith" },
            { time: "12:00 PM", name: "Strength & Conditioning", trainer: "Jane Doe" },
            { time: "6:00 PM", name: "Evening Cardio Blast", trainer: "Mike Smith" }
        ],
        tuesday: [
            { time: "6:00 AM", name: "Spin Class", trainer: "Jane Doe" },
            { time: "10:00 AM", name: "Pilates", trainer: "Lisa Wong" },
            { time: "5:00 PM", name: "Boxing Fundamentals", trainer: "Mike Smith" },
            { time: "7:00 PM", name: "Zumba Dance", trainer: "Lisa Wong" }
        ],
        wednesday: [
            { time: "6:00 AM", name: "CrossFit Training", trainer: "Mike Smith" },
            { time: "9:00 AM", name: "Yoga Flow", trainer: "Lisa Wong" },
            { time: "12:00 PM", name: "Core Strength", trainer: "Jane Doe" },
            { time: "6:00 PM", name: "Full Body Circuit", trainer: "Jane Doe" }
        ],
        thursday: [
            { time: "6:00 AM", name: "Power Lifting", trainer: "Jane Doe" },
            { time: "10:00 AM", name: "Barre Fitness", trainer: "Lisa Wong" },
            { time: "5:00 PM", name: "Kickboxing", trainer: "Mike Smith" },
            { time: "7:00 PM", name: "Stretching & Recovery", trainer: "Lisa Wong" }
        ],
        friday: [
            { time: "6:00 AM", name: "Boot Camp", trainer: "Mike Smith" },
            { time: "9:00 AM", name: "TRX Suspension", trainer: "Jane Doe" },
            { time: "12:00 PM", name: "Lunch Hour Express", trainer: "Mike Smith" },
            { time: "6:00 PM", name: "Friday Night Burn", trainer: "Jane Doe" }
        ],
        saturday: [
            { time: "8:00 AM", name: "Weekend Warrior Workout", trainer: "Mike Smith" },
            { time: "10:00 AM", name: "Family Fitness Fun", trainer: "Lisa Wong" },
            { time: "12:00 PM", name: "Outdoor Training", trainer: "Jane Doe" }
        ]
    };

    // Function to display schedule for selected day
    function showSchedule(day) {
        const scheduleDisplay = document.getElementById('schedule-display');
        const dayButtons = document.querySelectorAll('.day-buttons button');
        
        // Update active button
        dayButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase() === day) {
                btn.classList.add('active');
            }
        });

        // Get classes for the selected day
        const classes = scheduleData[day];
        
        if (classes && classes.length > 0) {
            scheduleDisplay.classList.remove('empty');
            let html = '';
            classes.forEach(classInfo => {
                html += `
                    <div class="class-item">
                        <div class="class-time">${classInfo.time}</div>
                        <div class="class-name">${classInfo.name}</div>
                        <div class="class-trainer">with ${classInfo.trainer}</div>
                    </div>
                `;
            });
            scheduleDisplay.innerHTML = html;
        } else {
            scheduleDisplay.classList.add('empty');
            scheduleDisplay.innerHTML = '<p>No classes scheduled for this day.</p>';
        }
    }

    // Show Monday schedule by default on page load
    showSchedule('monday');

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