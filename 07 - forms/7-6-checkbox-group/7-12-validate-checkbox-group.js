/**
 * Example 7-12. Validating a checkbox group
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function validateCheckboxes(form) {
  const data = new FormData(form);

  // To avoid setting the validation error on multiple elements,
  // choose the first checkbox and use that to hold the group's validation
  // message.
  const element = form.elements.option1;

  if (data.getAll('options').length === 0) {
    element.setCustomValidity('Please select at least one option.');
  } else {
    element.setCustomValidity('');
  }
}
