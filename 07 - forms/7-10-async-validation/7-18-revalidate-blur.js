/**
 * Example 7-18. Revalidating on blur
 * From "Web Browser API Cookbook" by Joe Attardi
 */

form.elements.password.addEventListener('blur', async event => {
  const password = event.target;
  const errorElement = document.getElementById('password-error');
  if (password.dataset.shouldValidate) {
    await validatePasswordStrength(form);
    if (password.checkValidity()) {
      errorElement.textContent = '';
      password.classList.remove('border-danger');
    }
  }
});
