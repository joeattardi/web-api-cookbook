/**
 * Example 7-4. Handling array form values
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Converts a form's data into an object that can be sent as JSON.
 * @param form The form element
 * @returns An object containing all the mapped keys and values
 */
function toObject(form) {
  const data = new FormData(form);
  const body = {};

  for (const key of data.keys()) {
    // Returns an array of all values bound to a given key
    const values = data.getAll(key);

    // If there's only one element in the array, set that element directly
    if (values.length === 1) {
      body[key] = values[0];
    } else {
      // Otherwise, set the array
      body[key] = values;
    }
  }

  return body;
}
