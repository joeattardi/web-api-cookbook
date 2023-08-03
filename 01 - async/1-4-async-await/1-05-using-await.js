/**
 * Example 1-5. Using the await keyword
 * From "Web Browser API Cookbook" by Joe Attardi
 * 
 * Assumes there is a getUsers function that returns a Promise.
 */

// A function must be declared with the `async` keyword 
// in order to use `await` in its body.
async function listUsers() {
  try {
    // Equivalent to getUsers().then(...)
    const userList = await getUsers();
    console.log('User List:');
    userList.forEach(user => {
      console.log(user.name);
    });
  } catch (error) { // Equivalent to .catch(...)
    console.error('Failed to load the user list:', error);
  }
}
