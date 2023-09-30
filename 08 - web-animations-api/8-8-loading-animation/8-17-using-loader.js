/**
 * Example 8-17. Using the loader
 * From "Web Browser API Cookbook" by Joe Attardi
 */
showLoader(
  fetch('https://example.com/api/users')
    .then(response => response.json())
);
