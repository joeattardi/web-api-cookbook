/**
 * Example 17-12. A simple view transition
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function showAboutPage() {
  document.startViewTransition(() => {
    document.querySelector('#home-page').style.display = 'none';
    document.querySelector('#about-page').style.display = 'block';
  });
}
