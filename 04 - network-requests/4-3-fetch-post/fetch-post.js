/**
 * Example 4-4. Sending JSON payload via POST with the Fetch API
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Creates a new user by sending a POST request to /api/users.
 * @param firstName The user's first name
 * @param lastName The user's last name
 * @param department The user's department
 * @returns a Promise that resolves to the API response body
 */
function createUser(firstName, lastName, department) {
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ firstName, lastName, department }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error.message));
}

createUser('John', 'Doe', 'Engineering')
  .then(() => console.log('Created user!'))
  .catch(error => console.error('Error creating user:', error));
