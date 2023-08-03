/**
 * Example 3-7. Attempting to call append without a value
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const url = new URL('https://example.com/api/search?objectType=user');

// TypeError: Failed to execute 'append' on 'URLSearchParams': 
// 2 arguments required, but only 1 present.
url.searchParams.append('name');
