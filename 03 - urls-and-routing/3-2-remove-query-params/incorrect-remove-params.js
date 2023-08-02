/**
 * Example 3-4. Incorrectly trying to remove all query parameters
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const url = new URL('https://example.com/api/users?user=sysadmin&q=user');

url.search = null;
console.log(url.toString()); // https://example.com/api/users?null
