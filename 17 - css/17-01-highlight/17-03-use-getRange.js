/**
 * Example 17-3. Using the getRange helper
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const node = document.querySelector('#text');
const range = getRange(node.firstChild, 'highlight some of the text');
