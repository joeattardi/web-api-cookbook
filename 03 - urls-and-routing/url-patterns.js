const profilePattern = new URLPattern({ pathname: '/api/users/:userId/profile' });

// The pattern won't match a pathname alone; it must be a valid URL
console.log(profilePattern.test('/api/users/123/profile')); // false

// This URL matches because the pathname matches the pattern
console.log(profilePattern.test('https://example.com/api/users/123/profile')); // true

// It also matches URL objects
console.log(profilePattern.test(new URL('https://example.com/api/users/123/profile'))); // true

// The pathname must match exactly, so this won't match. 
console.log(profilePattern.test('https://example.com/v1/api/users/123/profile')); // false

const wildcardProfilePattern = new URLPattern({ pathname: '/*/api/users/:userId/profile' });

// This matches now because the /v1 portion of the URL matches the wildcard
console.log(wildcardProfilePattern.test('https://example.com/v1/api/users/123/profile')); // true
