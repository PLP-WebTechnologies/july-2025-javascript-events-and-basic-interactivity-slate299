// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});

// Counter Game
let count = 0;
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

function updateCounter() {
    counterValue.textContent = count;
    // Change color based on value
    if (count > 0) {
        counterValue.style.color = 'var(--success-color)';
    } else if (count < 0) {
        counterValue.style.color = 'var(--error-color)';
    } else {
        counterValue.style.color = 'var(--text-color)';
    }
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

// FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const toggle = question.querySelector('.faq-toggle');
        
        // Toggle the answer visibility
        answer.classList.toggle('show');
        
        // Update the toggle icon
        if (answer.classList.contains('show')) {
            toggle.textContent = '-';
        } else {
            toggle.textContent = '+';
        }
    });
});

// Tab Interface
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding panel
        const tabId = button.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Form Validation
const form = document.getElementById('validationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    
    // Validate name
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    // Validate email
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }
    
    // Validate password
    if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }
    
    // If form is valid, show success message
    if (isValid) {
        successMessage.style.display = 'block';
        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            successMessage.style.display = 'none';
        }, 3000);
    }
});

// Real-time validation for better UX
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
        nameError.style.display = 'none';
    }
});

emailInput.addEventListener('input', () => {
    if (emailRegex.test(emailInput.value)) {
        emailError.style.display = 'none';
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length >= 8) {
        passwordError.style.display = 'none';
    }
});