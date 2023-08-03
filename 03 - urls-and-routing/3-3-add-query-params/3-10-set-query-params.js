/**
 * Example 3-10. Adding query parameters with set
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const url = new URL('https://example.com/api/search?objectType=user');

url.searchParams.set('userRole', 'admin');
url.searchParams.set('userRole', 'user');
url.searchParams.set('name', 'luke');
