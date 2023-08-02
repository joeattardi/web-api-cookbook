/**
 * Example 3-9. Encoding reserved characters in a query parameter
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const url = new URL('https://example.com/api/search');

// Contrived example string demonstrating several reserved characters
url.searchParams.append('q', 'admin&user?luke');
