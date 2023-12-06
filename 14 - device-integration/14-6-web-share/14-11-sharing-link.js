/**
 * Example 14-11. Sharing a link
 * From "Web Browser API Cookbook" by Joe Attardi
 */

if ('share' in navigator) {
  navigator.share({
    title: 'Web Browser API Cookbook',
    text: 'Check out this awesome site!',
    url: 'https://browserapis.dev'
  });
}
