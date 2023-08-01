/**
 * Example 1-7. Using Promise.allSettled
 * From "Web Browser API Cookbook" by Joe Attardi
 * 
 * Assumes there is a getUser function that returns a Promise.
 */

Promise.allSettled([
  getUser(1),
  getUser(2),
  getUser(3)
]).then(results => {
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log('- User:', result.value.name);
    } else {
      console.log('- Error:', result.reason);
    }
  });
});
// No catch necessary here because allSettled is always fulfilled
