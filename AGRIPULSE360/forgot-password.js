// Handle verification method switch
document.querySelectorAll('input[name="verifyMethod"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const emailField = document.getElementById('emailField');
        const phoneField = document.getElementById('phoneField');
        
        if (e.target.value === 'email') {
            emailField.style.display = 'block';
            phoneField.style.display = 'none';
            document.getElementById('phone').required = false;
            document.getElementById('email').required = true;
        } else {
            emailField.style.display = 'none';
            phoneField.style.display = 'block';
            document.getElementById('phone').required = true;
            document.getElementById('email').required = false;
        }
    });
});

// Timer functionality
let timerInterval;
function startTimer(duration) {
    let timer = duration;
    const display = document.getElementById('timer');
    const resendBtn = document.getElementById('resendOtp');
    
    clearInterval(timerInterval);
    resendBtn.disabled = true;
    
    timerInterval = setInterval(() => {
        const minutes = parseInt(timer / 60, 10);
        const seconds = parseInt(timer % 60, 10);
        
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (--timer < 0) {
            clearInterval(timerInterval);
            resendBtn.disabled = false;
        }
    }, 1000);
}

// Handle initial form submission (send OTP)
document.getElementById('forgotPasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const method = document.querySelector('input[name="verifyMethod"]:checked').value;
    const contact = method === 'email' 
        ? document.getElementById('email').value 
        : document.getElementById('phone').value;
    
    try {
        // Here you would make an API call to send OTP
        // For demo, we'll just show success
        document.getElementById('forgotPasswordForm').style.display = 'none';
        document.getElementById('otpVerificationForm').style.display = 'block';
        startTimer(120); // 2 minutes timer
        
        alert(`OTP sent to your ${method}: ${contact}`);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send OTP. Please try again.');
    }
});

// Handle OTP verification
document.getElementById('otpVerificationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const otp = document.getElementById('otp').value;
    
    try {
        // Here you would verify OTP with your backend
        // For demo, we'll accept any 6-digit OTP
        if (otp.length === 6 && /^\d+$/.test(otp)) {
            document.getElementById('otpVerificationForm').style.display = 'none';
            document.getElementById('newPasswordForm').style.display = 'block';
            clearInterval(timerInterval);
        } else {
            alert('Invalid OTP. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to verify OTP. Please try again.');
    }
});

// Handle resend OTP
document.getElementById('resendOtp').addEventListener('click', async () => {
    try {
        const method = document.querySelector('input[name="verifyMethod"]:checked').value;
        const contact = method === 'email' 
            ? document.getElementById('email').value 
            : document.getElementById('phone').value;
        
        // Here you would make an API call to resend OTP
        startTimer(120); // Restart timer
        alert(`New OTP sent to your ${method}: ${contact}`);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to resend OTP. Please try again.');
    }
});

// Handle password reset
document.getElementById('newPasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    try {
        // Here you would make an API call to update password
        // For demo, we'll just show success
        alert('Password successfully reset!');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to reset password. Please try again.');
    }
});

// Password visibility toggle
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}
