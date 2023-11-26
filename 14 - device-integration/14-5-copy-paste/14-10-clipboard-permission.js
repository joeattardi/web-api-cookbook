/**
 * Example 14-10. Checking clipboard read permission
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const permission = await navigator.permissions.query({
  name: 'clipboard-read'
});

if (permission.state !== 'denied') {
  // continue with the clipboard read operation
}
