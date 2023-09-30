/**
 * Example 7-14. Setting up checkbox validation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Adds the necessary event listeners to an element to participate in form validation.
 * It handles setting and clearing error messages depending on the validation state.
 * @param element The input element to validate
 */
function addValidation(element) {
  const errorElement = document.getElementById('checkbox-error');

  /**
   * Fired when the form is validated and the field is not valid.
   * Sets the error message and style.
   */
  element.addEventListener('invalid', () => {
    errorElement.textContent = element.validationMessage;
  });

  /**
   * Fired when user input occurs in the field.
   * It will re-check the field's validity and clear the error message if it becomes valid.
   */
  element.addEventListener('change', () => {
    validateCheckboxes(form);
    if (form.elements.option1.checkValidity()) {
      errorElement.textContent = '';
    }
  });
}
