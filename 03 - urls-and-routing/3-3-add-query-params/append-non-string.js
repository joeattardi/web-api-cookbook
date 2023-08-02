/**
 * Example 3-8. Appending non-string parameters
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const url = new URL('https://example.com/api/search?objectType=user');

// The resulting URL has the query string:
//  ?objectType=user&name=null&role=undefined
url.searchParams.append('name', null);
url.searchParams.append('role', undefined);
