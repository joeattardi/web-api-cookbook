/**
 * Example 3-17. Using a wildcard in the pattern
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const wildcardProfilePattern = new URLPattern({ pathname: '/*/api/users/:userId/profile' });

// This matches now because the /v1 portion of the URL matches the wildcard
console.log(wildcardProfilePattern.test('https://example.com/v1/api/users/123/profile')); // true
