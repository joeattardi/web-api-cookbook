/**
 * Example 10-16. Preparing the export link
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const exportLink = document.querySelector('#export-link');

async function getUserData() {
  const response = await fetch('/api/users');
  const users = await response.json();

  // Render the user data in the UI, under the assumption
  // that you have a `renderUsers` function somewhere that does this.
  renderUsers(users);

  // Clean up the previous export data, if it exists.
  const currentUrl = exportLink.href;
  if (currentUrl) {
    URL.revokeObjectURL(currentUrl);
  }

  // Need a Blob for creating an object URL
  const blob = new Blob([JSON.stringify(userList, null, 2)], {
    type: 'application/json'
  });

  // The object URL links to the Blob contents - set this in the link
  const url = URL.createObjectURL(blob);
  exportLink.href = url;
}
