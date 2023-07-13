// A reference to the color picker input element.
const colorPicker = document.querySelector('#colorPicker');

// Load the saved color, if any, and set it on the color picker.
const storedValue = localStorage.getItem('savedColor'); 
if (storedValue) {
  colorPicker.value = storedValue;
}

// Update the saved color whenever the value changes.
colorPicker.addEventListener('change', event => {
  localStorage.setItem('savedColor', event.target.value);
});
