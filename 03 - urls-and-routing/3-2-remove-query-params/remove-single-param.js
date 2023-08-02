/**
 * Example 3-5. Removing a single query parameter
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Removes a single parameter from an input URL.
 * 
 * @param inputUrl a URL string containing query parameters
 * @param paramName the name of the parameter to remove
 * @returns a new URL string with the given query parameter removed
 */
function removeQueryParameter(inputUrl, paramName) {
  console.log({ inputUrl, paramName });
  const url = new URL(inputUrl);
  url.searchParams.delete(paramName);
  return url.toString();
}

console.log(
  removeQueryParameter(
    'https://example.com/api/users?user=sysadmin&q=user',
    'q'
  )
); // https://example.com/api/users?user=sysadmin
