/**
 * Example 17-22. Checking computed styles
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const content = document.querySelector('#content');
const styles = window.getComputedStyle(content);
console.log(styles.backgroundColor); // 'rgb(0, 0, 255)
console.log(styles.color); // 'rgb(255, 255, 255)'
