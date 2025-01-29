document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('toggle-password');
    const loadingSpinner = document.querySelector('.loading-spinner');
    
    // Object to store validation patterns
    const patterns = {
        name: /^[A-Za-z\s]{2,50}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^\d{10}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    };

    // Object to store error messages
    const errorMessages = {
        name: 'Name should only contain letters and spaces (2-50 characters)',
        email: 'Please enter a valid email address',
        phone: 'Please enter a valid 10-digit phone number',
        password: 'Password must be at least 8 characters long and include letters, numbers, and special characters'
    };

    // Toggle password visibility
    togglePasswordButton.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePasswordButton.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    });

    // Real-time validation for all inputs
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            validateInput(input);
        });

        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });

    // Validate individual input
    function validateInput(input) {
        const errorElement = document.getElementById(`${input.id}-error`);
        let isValid = true;

        if (input.type === 'checkbox') {
            isValid = input.checked;
            toggleError(errorElement, isValid, 'Please accept the terms and conditions');
            return isValid;
        }

        if (patterns[input.id]) {
            isValid = patterns[input.id].test(input.value);
            toggleError(errorElement, isValid, errorMessages[input.id]);
        }

        return isValid;
    }

    // Toggle error message
    function toggleError(errorElement, isValid, message) {
        if (!isValid) {
            errorElement.textContent = message;
            errorElement.classList.add('visible');
        } else {
            errorElement.textContent = '';
            errorElement.classList.remove('visible');
        }
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all inputs
        const inputs = form.querySelectorAll('input');
        let isFormValid = true;

        inputs.forEach(input => {
            if (!validateInput(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            return;
        }

        // Show loading state
        const submitButton = form.querySelector('.submit-button');
        submitButton.disabled = true;
        loadingSpinner.hidden = false;

        try {
            // Collect form data
            const formData = {
                name: form.name.value,
                email: form.email.value,
                phone: form.phone.value,
                password: form.password.value
            };

            // Simulate API call (replace with your actual API endpoint)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Log success (replace with your actual API call)
            console.log('Form submitted successfully:', formData);
            
            // Reset form
            form.reset();
            alert('Account created successfully!');
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error creating your account. Please try again.');
            
        } finally {
            // Reset loading state
            submitButton.disabled = false;
            loadingSpinner.hidden = true;
        }
    });
});
