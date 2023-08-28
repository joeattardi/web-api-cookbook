/**
 * Example 8-2. Fading in with the Web Animations API
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const element = document.querySelector('.some-element');
element.animate([
  { opacity: 0 },
  { opacity: 1 }
], { duration: 250 });
