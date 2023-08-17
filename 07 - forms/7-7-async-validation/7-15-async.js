/**
 * Example 7-15. Performing asynchronous password strength validation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Calls an API to validate that a password meets strength requirements.
 * @param form the form containing the password field
 */
async function validatePasswordStrength(form) {
  const { password } = form.elements;
  const response = await fetch(`/api/password-strength?password=${password.value}`);
  const result = await response.json();

  if (result.status === 'error') {
    password.setCustomValidity(result.error);
  } else {
    password.setCustomValidity('');
  }
}