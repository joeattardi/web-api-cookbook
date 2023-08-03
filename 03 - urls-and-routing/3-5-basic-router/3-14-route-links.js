/**
 * Example 3-14. Adding click handlers to route links
 * From "Web Browser API Cookbook" by Joe Attardi
 */

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the browser from trying to load the new URL from the server!
    event.preventDefault();
    navigate(link.getAttribute('href'));
  });
});
