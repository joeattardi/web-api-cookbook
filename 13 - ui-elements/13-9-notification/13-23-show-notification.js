/**
 * Example 13-23. Showing a notification
 * From "Web Browser API Cookbook" by Joe Attardi
 */

if (await getPermission()) {
  new Notification('Hello!', {
    body: 'This is a test notification'
  });
}