/**
 * Example 13-22. Checking notification permissions
 * From "Web Browser API Cookbook" by Joe Attardi
 */

async function getPermission() {
  // If the user has already explicitly denied permission, don't ask again.
  if (Notification.permission !== 'denied') {
    // The result of this permission request will update the `Notification.permission` property.
    // The permission request returns a Promise.
    await Notification.requestPermission();
  }

  // Only show a notification if `Notification.permission` is `granted`.
  return Notification.permission === 'granted';
}
