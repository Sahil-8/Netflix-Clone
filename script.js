// Email input label animation
document.querySelectorAll('input[type="email"]').forEach(input => {
    const span = input.nextElementSibling;

    input.addEventListener('focus', () => {
        span.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            span.classList.remove('active');
        }
    });
});

// FAQ toggle behavior
document.querySelectorAll('.question input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Collapse all others
        document.querySelectorAll('.question input[type="checkbox"]').forEach(cb => {
            if (cb !== checkbox) cb.checked = false;
        });
    });
});

// Basic email validation on form submit
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
});
