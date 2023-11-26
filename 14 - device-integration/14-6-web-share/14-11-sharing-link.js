/**
 * Example 14-11. Sharing a link
 * From "Web Browser API Cookbook" by Joe Attardi
 */

if ('share' in navigator) {
  navigator.share({
    title: 'Web Browser API Cookbook',
    url: 'https://browserapis.dev'
  });
}
