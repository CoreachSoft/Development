function GetContact() {
    alert("GetContact function called!");
}

// Assuming you have a button with id 'contactBtn'
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('contactBtn');
    if (btn) {
        btn.addEventListener('click', GetContact);
    }
});

// Form validation for a form with id 'contactForm'
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            let valid = true;
            let messages = [];

            const name = form.querySelector('input[name="name"]');
            const email = form.querySelector('input[name="email"]');
            const message = form.querySelector('textarea[name="message"]');

            if (!name || name.value.trim() === '') {
                valid = false;
                messages.push('Name is required.');
            }

            if (!email || email.value.trim() === '') {
                valid = false;
                messages.push('Email is required.');
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                valid = false;
                messages.push('Email is not valid.');
            }

            if (!message || message.value.trim() === '') {
                valid = false;
                messages.push('Message is required.');
            }

            if (!valid) {
                event.preventDefault();
                alert(messages.join('\n'));
            }
        });
    }
});