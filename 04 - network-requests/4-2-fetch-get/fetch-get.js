/**
 * Example 4-2. Sending a GET request with the Fetch API
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Loads users by calling the /api/users API, and parses the
 * response JSON.
 * @returns a Promise that resolves to an array of users returned by the API
 */
function loadUsers() {
  // Make the request
  return fetch('/api/users')
    // Parse the response body to an object
    .then(response => response.json())
    // Handle errors, including network and JSON parsing errors
    .catch(error => console.error('Couldn\'t fetch:', error.message));
}

loadUsers().then(users => {
  console.log('Got users:', users);
});
