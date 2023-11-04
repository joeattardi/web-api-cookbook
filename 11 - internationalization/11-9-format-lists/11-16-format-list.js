/**
 * Example 11-16. Formatting a list of user objects
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function getUserListString(users) {
  const listFormat = new Intl.ListFormat();
  return listFormat.format(users.map(user => user.username));
}
