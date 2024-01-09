/**
 * Example 11-16. Formatting a list of user objects
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function getUserListString(users, locale = 'en-US') {
  // The locale of the ListFormat is configurable
  const listFormat = new Intl.ListFormat(locale);
  return listFormat.format(users.map(user => user.username));
}
