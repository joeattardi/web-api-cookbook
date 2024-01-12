/**
 * Example 13-9. Using the confirmation dialog component
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const confirmDialog = document.querySelector('#confirm-delete');
if (await confirmDialog.showConfirmation()) {
  // perform the delete operation
}
