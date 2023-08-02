/**
 * Example 2-11. Listening for storage changes from another tab
 * From "Web Browser API Cookbook" by Joe Attardi
 * 
 * Listens for storage changes with the persistent color picker 
 * from Example 2-2.
 */

// Listen for the `storage` event. If another tab changes the
// `savedColor` item, update this page's color picker with the new value.
window.addEventListener('storage', event => {
  if (event.key === 'savedColor') {
    console.log('New color was chosen in another tab:', event.newValue);
    colorPicker.value = event.newValue;
  }
});
