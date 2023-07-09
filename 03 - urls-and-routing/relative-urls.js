const usersApiUrl = new URL('/api/users', 'https://example.com');

console.log(usersApiUrl); // https://example.com/api/users

// https://example.com/api/v1/users
console.log(new URL('/api/v1/users', 'https://example.com'));

// https://example.com/api/v1/users
// Note that /api/v2 is discarded due to the leading slash in /api/v1/users
console.log(new URL('/api/v1/users', 'https://example.com/api/v2'));

// https://example.com/api/v1/users
console.log(new URL('../v1/users', 'https://example.com/api/v2'));

// https://example.com/api/v1/users
console.log(new URL('users', 'https://example.com/api/v1/groups'));

// On the same origin
const usersApiUrlSameOrigin = new URL('/api/users', window.location);
