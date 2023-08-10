/**
 * Example 7-11. Validating the checkbox form
 * From "Web Browser API Cookbook" by Joe Attardi
 */

addValidation(form.elements.option1);
addValidation(form.elements.option2);
addValidation(form.elements.option3);

form.addEventListener('submit', event => {
  event.preventDefault();
  validateCheckboxes(form);
  console.log(form.checkValidity());
});
