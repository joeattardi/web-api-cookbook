/**
 * Example 13-2. JavaScript for the dialog
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// Select the dialog, its OK button, and the trigger button elements.
const dialog = document.querySelector('#alert');
const okButton = document.querySelector('#ok-button');
const trigger = document.querySelector('#show-dialog');

// Close the dialog when the OK button is clicked.
okButton.addEventListener('click', () => {
  dialog.close();
});

// Show the dialog when the trigger button is clicked.
trigger.addEventListener('click', () => {
  dialog.showModal();
});
