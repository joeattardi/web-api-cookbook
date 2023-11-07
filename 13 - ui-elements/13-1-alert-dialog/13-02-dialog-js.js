/**
 * Example 13-2. JavaScript for the dialog
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const dialog = document.querySelector('#alert');
const okButton = document.querySelector('#ok-button');
const trigger = document.querySelector('#show-dialog');

okButton.addEventListener('click', () => {
  dialog.close();
});

trigger.addEventListener('click', () => {
  dialog.showModal();
});
