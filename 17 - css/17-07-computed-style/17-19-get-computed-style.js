/**
 * Example 17-19. Getting the computed style
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const content = document.querySelector('#content');
const styles = window.getComputedStyle(content);
console.log(styles.backgroundColor);
