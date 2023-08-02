/**
 * Example 2-2. Persisting data to local storage
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// A reference to the color picker input element.
const colorPicker = document.querySelector('#colorPicker');

// Load the saved color, if any, and set it on the color picker.
const storedValue = localStorage.getItem('savedColor'); 
if (storedValue) {
  console.log('Found saved color:', storedValue);
  colorPicker.value = storedValue;
}

// Update the saved color whenever the value changes.
colorPicker.addEventListener('change', event => {
  localStorage.setItem('savedColor', event.target.value);
  console.log('Saving new color:', colorPicker.value);
});