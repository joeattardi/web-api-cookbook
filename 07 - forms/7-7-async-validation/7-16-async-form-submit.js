/**
 * Example 7-16. The async form submit handler
 * From "Web Browser API Cookbook" by Joe Attardi
 */

form.addEventListener('submit', async event => {
  event.preventDefault();
  await validatePasswordStrength(form);
  console.log(form.checkValidity());
});
