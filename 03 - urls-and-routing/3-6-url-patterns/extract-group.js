/**
 * Example 3-18. Extracting the user ID
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const profilePattern = new URLPattern({ pathname: '/api/users/:userId/profile' });

const match = profilePattern.exec('https://example.com/api/users/123/profile');
console.log(match.pathname.input); // '/api/users/123/profile'
console.log(match.pathname.groups.userId); // '123'
