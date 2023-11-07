/**
 * Example 13-8. Using the confirmation dialog component
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const confirmDialog = document.querySelector('#confirm-delete');
if (await confirmDialog.showModal()) {
  // perform the delete operation
}
