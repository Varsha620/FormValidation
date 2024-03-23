function validateForm(event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    let errorMessage = '';
  
    if (fullName.length < 5) {
      errorMessage += 'Name must be at least 5 characters long.\n';
    }
  
    if (!email.includes('@')) {
      errorMessage += 'Enter a valid email address.\n';
    }
  
    if (phoneNumber === '123456789' || phoneNumber.length !== 10) {
      errorMessage += 'Enter a valid 10-digit phone number.\n';
    }
  
    if (password.length < 8 || password === 'password' || password === fullName) {
      errorMessage += 'Password must be at least 8 characters long and not match common patterns.\n';
    }
  
    if (password !== confirmPassword) {
      errorMessage += 'Passwords do not match.\n';
    }
  
    if (errorMessage === '') {
      // Form is valid, submit the form or perform further actions
      document.getElementById('errorText').textContent = '';
      document.getElementById('registrationForm').submit();
    } else {
      // Display error message
      document.getElementById('errorText').textContent = errorMessage;
    }
  }
  