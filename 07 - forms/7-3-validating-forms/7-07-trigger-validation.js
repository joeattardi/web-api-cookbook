/**
 * Example 7-7. Triggering form validation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// Assuming the form has two inputs with name `name` and `email`
addValidation(form.elements.name);
addValidation(form.elements.email);

form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.checkValidity()) {
    // Validation passed, submit the form
  }
});
