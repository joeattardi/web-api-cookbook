/**
 * Example 2-4. Attempting to persist an array
 * From "Web Browser API Cookbook" by Joe Attardi
 * 
 * Demonstrates that you can't use `localStorage.setItem` to persist an
 * object directly.
 */

const userProfile = {
  firstName: 'Ava',
  lastName: 'Johnson'
};

localStorage.setItem('userProfile', userProfile);

// Prints '[object Object]'
console.log(localStorage.getItem('userProfile'));
