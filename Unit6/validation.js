document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    function validateUsername() {
        const username = usernameInput.value;
        if (username.length < 3 || username.length > 20) {
            usernameError.textContent = 'Username must be between 3 and 20 characters.';
            return false;
        }
        usernameError.textContent = '';
        return true;
    }

    function validateEmail() {
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validatePassword() {
        const password = passwordInput.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            passwordError.textContent = 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.';
            return false;
        }
        passwordError.textContent = '';
        return true;
    }

    function validateConfirmPassword() {
        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            return false;
        }
        confirmPasswordError.textContent = '';
        return true;
    }

    function validateForm() {
        const isValidUsername = validateUsername();
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        const isValidConfirmPassword = validateConfirmPassword();
        submitBtn.disabled = !(isValidUsername && isValidEmail && isValidPassword && isValidConfirmPassword);
    }

    // Attach input events for real-time validation
    usernameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);
});
