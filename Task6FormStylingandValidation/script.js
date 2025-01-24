// Select form and input fields
const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Select error messages
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Form validation function
form.addEventListener('submit', (e) => {
  let isValid = true;

  // Clear previous error messages
  clearErrors();

  // Validate name
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    nameError.style.display = 'block';
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email address.';
    emailError.style.display = 'block';
    isValid = false;
  }

  // Validate password
  if (passwordInput.value.trim().length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    passwordError.style.display = 'block';
    isValid = false;
  }

  // Prevent form submission if validation fails
  if (!isValid) {
    e.preventDefault();
  }
});

// Function to clear error messages
function clearErrors() {
  nameError.style.display = 'none';
  emailError.style.display = 'none';
  passwordError.style.display = 'none';
}
