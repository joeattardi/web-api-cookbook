/**
 * Example 3-6. Adding additional query parameters
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const url = new URL('https://example.com/api/search?objectType=user');

url.searchParams.append('userRole', 'admin');
url.searchParams.append('userRole', 'user');
url.searchParams.append('name', 'luke');

// Prints "https://example.com/api/search?objectType=user&userRole=admin&userRole=user&name=luke"
console.log(url.toString());
