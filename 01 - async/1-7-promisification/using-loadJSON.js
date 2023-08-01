/**
 * Example 1-9. Using the loadJSON helper
 * From "Web Browser API Cookbook" by Joe Attardi
 * 
 * Demonstrates the usage of the loadJSON helper function
 * from Example 1-8.
 */

// Using .then
loadJSON('/api/users/1').then(user => {
  console.log('Got user:', user);
})

// Using await
const user = await loadJSON('/api/users/1');
console.log('Got user:', user);
