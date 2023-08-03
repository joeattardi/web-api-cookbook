/**
 * Example 2-12. Building a list of keys
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Generates an array of all keys found in the local storage area.
 * @returns an array of keys
 */
function getAllKeys() {
  const keys = [];

  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }

  return keys;
}