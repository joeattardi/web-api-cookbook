/**
 * Example 17-17. Listening for media query changes
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const query = window.matchMedia('(prefers-color-scheme: dark)');
query.addEventListener('change', () => {
  if (query.matches) {
    // switch to dark mode
  } else {
    // switch to light mode
  }
});
