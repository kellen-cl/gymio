console.log("Pricing page loaded.");

    // Pricing data
    const pricing = {
        monthly: { starter: 19, pro: 39, elite: 79 },
        yearly: { starter: 15, pro: 31, elite: 63 }
    };

    let isYearly = false;

    // Toggle billing period
    function toggleBilling() {
        isYearly = !isYearly;
        const toggle = document.getElementById('billingToggle');
        const monthlyLabel = document.getElementById('monthlyLabel');
        const yearlyLabel = document.getElementById('yearlyLabel');

        toggle.classList.toggle('active');
        
        if (isYearly) {
            monthlyLabel.classList.remove('active');
            yearlyLabel.classList.add('active');
            updatePrices('yearly');
        } else {
            yearlyLabel.classList.remove('active');
            monthlyLabel.classList.add('active');
            updatePrices('monthly');
        }
    }

    // Update prices
    function updatePrices(period) {
        const suffix = period === 'yearly' ? '/yr' : '/mo';
        document.getElementById('starterPrice').innerHTML = `$${pricing[period].starter}<span>${suffix}</span>`;
        document.getElementById('proPrice').innerHTML = `$${pricing[period].pro}<span>${suffix}</span>`;
        document.getElementById('elitePrice').innerHTML = `$${pricing[period].elite}<span>${suffix}</span>`;
    }

    // BMI Calculator
    function calcBMI() {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const resultDiv = document.getElementById("bmiResult");

        if (!weight || !height || weight <= 0 || height <= 0) {
            resultDiv.innerHTML = "⚠️ Please enter valid weight and height values.";
            resultDiv.classList.add('show');
            return;
        }

        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

        let status = "";
        let emoji = "";
        if (bmi < 18.5) {
            status = "Underweight";
            emoji = "📊";
        } else if (bmi < 25) {
            status = "Normal weight";
            emoji = "✅";
        } else if (bmi < 30) {
            status = "Overweight";
            emoji = "⚠️";
        } else {
            status = "Obesity";
            emoji = "🚨";
        }

        resultDiv.innerHTML = `${emoji} Your BMI is <strong>${bmi}</strong> (${status})`;
        resultDiv.classList.add('show');
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