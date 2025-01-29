document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('toggle-password');
    const loadingSpinner = document.querySelector('.loading-spinner');
    
    // Object to store validation patterns
    const patterns = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    };

    // Object to store error messages
    const errorMessages = {
        email: 'Please enter a valid email address',
        password: 'Please enter your password'
    };

    // Toggle password visibility
    togglePasswordButton.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle eye icon
        const eyeIcon = togglePasswordButton.querySelector('i');
        eyeIcon.classList.toggle('fa-eye');
        eyeIcon.classList.toggle('fa-eye-slash');
    });

    // Real-time validation for all inputs
    form.querySelectorAll('input').forEach(input => {
        if (input.type !== 'checkbox') {
            input.addEventListener('input', () => {
                validateInput(input);
            });

            input.addEventListener('blur', () => {
                validateInput(input);
            });
        }
    });

    // Validate individual input
    function validateInput(input) {
        const errorElement = document.getElementById(`${input.id}-error`);
        let isValid = true;

        if (input.type === 'email') {
            isValid = patterns.email.test(input.value);
        } else if (input.type === 'password') {
            isValid = input.value.length > 0;
        }

        toggleError(errorElement, isValid, errorMessages[input.id]);
        return isValid;
    }

    // Toggle error message
    function toggleError(element, isValid, message) {
        if (!isValid) {
            element.textContent = message;
            element.classList.add('visible');
        } else {
            element.textContent = '';
            element.classList.remove('visible');
        }
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all inputs before submission
        const inputs = form.querySelectorAll('input:not([type="checkbox"])');
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
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        loadingSpinner.hidden = false;

        try {
            // Here you would typically make an API call to your backend
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simulate API call with timeout
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Redirect to dashboard or home page after successful login
            window.location.href = '/dashboard';
            
        } catch (error) {
            // Handle error (show error message to user)
            console.error('Login failed:', error);
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message visible';
            errorElement.textContent = 'Login failed. Please try again.';
            form.insertBefore(errorElement, submitButton);
            
        } finally {
            // Reset loading state
            submitButton.disabled = false;
            loadingSpinner.hidden = true;
        }
    });
});
