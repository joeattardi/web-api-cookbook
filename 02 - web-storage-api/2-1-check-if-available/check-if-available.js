/**
 * Example 2-1. Checking if local storage is available
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Determines if local storage is available.
 * @returns true if the browser can use local storage, false if not
 */
function isLocalStorageAvailable() {
  try {
    // Local storage is available if the property exists
    return typeof window.localStorage !== 'undefined';
  } catch (error) {
    // If window.localStorage exists but the user is blocking local 
    // storage, the attempting to read the property throws an exception.
    // If this happens, consider local storage not available.
    return false;
  }
}