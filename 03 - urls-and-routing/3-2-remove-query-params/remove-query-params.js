/**
 * Example 3-3. Removing a URL's query parameters
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Removes all parameters from an input URL.
 * 
 * @param inputUrl a URL string containing query parameters
 * @returns a new URL string with all query parameters removed
 */
function removeAllQueryParameters(inputUrl) {
  const url = new URL(inputUrl);
  url.search = '';
  return url.toString();
}

// Results in 'https://example.com/api/users'
removeAllQueryParams('https://example.com/api/users?user=sysadmin&q=user');
