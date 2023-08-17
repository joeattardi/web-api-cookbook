/**
 * Example 7-11. Using custom validation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Custom validation function that ensures the password and confirmPassword fields have the same value.
 * @param form the form containing the two fields
 */
function validatePasswordsMatch(form) {
  const { password, confirmPassword } = form.elements;

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('Passwords do not match.');
  } else {
    confirmPassword.setCustomValidity('');
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  validatePasswordsMatch(form);
  if (form.checkValidity()) {
    // Validation passed, submit the form
  }
});
