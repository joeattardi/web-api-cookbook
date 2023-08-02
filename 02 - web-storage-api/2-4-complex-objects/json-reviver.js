/**
 * Example 2-8. The reviver function
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function reviver(key, value) {
  // JSON.parse calls the reviver once for each key/value pair. Watch for the `due` key.
  // Only proceed if there's actually a value for `due`.
  if (key === 'due' && value) {
    // Here, the value is the timestamp. You can pass this to the `Date` constructor
    // to create a `Date` object referring to the proper time.
    return new Date(value);
  }

  // Restore all other values as is.
  return value;
}

const object = JSON.parse(todo, reviver);
