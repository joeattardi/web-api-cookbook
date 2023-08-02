/**
 * Example 3-16. Testing URLs against a pattern
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const profilePattern = new URLPattern({ pathname: '/api/users/:userId/profile' });

// The pattern won't match a pathname alone; it must be a valid URL
console.log(profilePattern.test('/api/users/123/profile')); // false

// This URL matches because the pathname matches the pattern
console.log(profilePattern.test('https://example.com/api/users/123/profile')); // true

// It also matches URL objects
console.log(profilePattern.test(new URL('https://example.com/api/users/123/profile'))); // true

// The pathname must match exactly, so this won't match. 
console.log(profilePattern.test('https://example.com/v1/api/users/123/profile')); // false
