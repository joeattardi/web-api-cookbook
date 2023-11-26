/**
 * Example 16-3. Creating a named logger
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function createLogger(name, color) {
  return console.log.bind(console, `%c${name}`, `color: ${color};`);
}
