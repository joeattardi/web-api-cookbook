/**
 * Example 13-5. Event listeners for the confirmation dialog
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const dialog = document.querySelector('#confirm');

confirmButton.addEventListener('click', () => {
  // Close the dialog with a return value of "confirm"
  dialog.close('confirm');
});

cancelButton.addEventListener('click', () => {
  // Close the dialog with a return value of "cancel"
  dialog.close('cancel');
});

dialog.addEventListener('cancel', () => {
  // Canceling with the Escape key doesn't set a return value.
  // Set it to "cancel" here so the close event handler will get
  // the proper value.
  dialog.returnValue = 'cancel';
});

dialog.addEventListener('close', () => {
  if (dialog.returnValue === 'confirm') {
    // The user clicked the Confirm button.
    // Perform the action, such as creating or deleting data.
  } else {
    // The user clicked the Cancel button or pressed the Escape key.
    // Don't perform the action.
  }
});
