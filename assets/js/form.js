const loginForm = document.querySelector('.login_form');
const signupForm = document.querySelector('.signup_form');

if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (password === '' || password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // Simple validation
    if (email && password) {
      alert(`Login successful for ${email}`);
      loginForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = signupForm.fullName.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    const confirmPassword = signupForm.confirmPassword.value;

    if (password === '' || password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (fullName.length < 3) {
      alert('Full Name must be at least 3 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Simple validation
    if (fullName && email && password) {
      alert(`Signup successful for ${fullName}`);
      signupForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}