/**
 * Example 3-13. A simple client-side router
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// Route definitions. Each route has a path and some content to render.
const routes = [
  { path: '/', content: '<h1>Home</h1>' },
  { path: '/about', content: '<h1>About</h1>' }
];

function navigate(path, pushState = true) {
  // Find the matching route and render its content
  const route = this.routes.find(route => route.path === path);

  // Be careful using innerHTML in a real app!
  document.querySelector('#main').innerHTML = route.content;

  if (pushState) {
    // Change the URL to match the new route
    history.pushState({}, '', path);
  }
}
