/**
 * Example 2-14. Removing an item from local storage
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// This is a safe operation. If the key doesn't exist,
// no exception is thrown.
localStorage.removeItem('my-key');
