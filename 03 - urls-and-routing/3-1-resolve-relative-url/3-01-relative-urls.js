/**
 * Example 3-1. Creating relative URLs
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Given a relative path and a base URL, resolves a full absolute URL.
 * @param relativePath The relative path for the URL
 * @param baseUrl A valid URL to use as the base.
 */
function resolveUrl(relativePath, baseUrl) {
  return new URL(relativePath, baseUrl).href;
}

// https://example.com/api/users
console.log(resolveUrl('/api/users', 'https://example.com'));

// https://example.com/api/v1/users
console.log(resolveUrl('/api/v1/users', 'https://example.com'));

// https://example.com/api/v1/users
// Note that /api/v2 is discarded due to the leading slash in /api/v1/users
console.log(resolveUrl('/api/v1/users', 'https://example.com/api/v2'));

// https://example.com/api/v1/users
console.log(resolveUrl('../v1/users/', 'https://example.com/api/v2'));

// https://example.com/api/v1/users
console.log(resolveUrl('users', 'https://example.com/api/v1/groups'));
