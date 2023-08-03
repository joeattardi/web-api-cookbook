/**
 * Example 4-3. Using Fetch with async/await
 * From "Web Browser API Cookbook" by Joe Attardi
 */

async function loadUsers() {
  try {
    const response = await fetch('/api/users');
    return response.json();
  } catch (error) {
    console.error('Error loading users:', error);
  }
}

async function printUsers() {
  const users = await loadUsers();
  console.log('Got users:', users);
}
