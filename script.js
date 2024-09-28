const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
  } else {
    alert("Form successfully submitted!");
    form.reset(); // Reset form after submission
  }
});