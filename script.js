function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('visible');
    }
}

// Example: Attach to hamburger icon
document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);

// Form validation for contact form
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            let valid = true;
            let messages = [];

            const name = contactForm.querySelector('input[name="name"]');
            const email = contactForm.querySelector('input[name="email"]');
            const message = contactForm.querySelector('textarea[name="message"]');

            if (!name.value.trim()) {
                valid = false;
                messages.push('Name is required.');
            }

            if (!email.value.trim()) {
                valid = false;
                messages.push('Email is required.');
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                valid = false;
                messages.push('Please enter a valid email address.');
            }

            if (!message.value.trim()) {
                valid = false;
                messages.push('Message is required.');
            }

            // Display error messages
            let errorDiv = contactForm.querySelector('.form-errors');
            if (!errorDiv) {
                errorDiv = document.createElement('div');
                errorDiv.className = 'form-errors';
                contactForm.prepend(errorDiv);
            }
            errorDiv.innerHTML = messages.join('<br>');

            if (!valid) {
                e.preventDefault();
            } else {
                errorDiv.innerHTML = '';
            }
        });
    }
});