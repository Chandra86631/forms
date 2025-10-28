document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMsg');

  form.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Clear previous errors and success
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMsg.textContent = '';

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const namePattern = /^[a-zA-Z\s]+$/;
    let isValid = true;

    // Validate name
    if (!name) {
      nameError.textContent = 'Name is required.';
      isValid = false;
    } else if (!namePattern.test(name)) {
      nameError.textContent = 'Name can only contain letters and spaces.';
      isValid = false;
    }

    // Validate email
    if (!email) {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate message
    if (!message) {
      messageError.textContent = 'Message is required.';
      isValid = false;
    }

    // Final check
    if (!isValid) {
      event.preventDefault(); // 🚫 Prevent form submission
    } else {
      event.preventDefault(); // Prevent actual submission for demo
      successMsg.textContent = '✅ Your message has been sent successfully!';
      form.reset(); // Clear form fields
    }
  });
});