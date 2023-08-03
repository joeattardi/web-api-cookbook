/**
 * Example 5-12. Searching string values with a cursor
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Searches for employees by name.
 * 
 * @param name A query string to match employee names
 * @param onSuccess Success callback that will receive the matching employees.
 */
function searchEmployees(name, onSuccess) {
  // An array to hold all contacts with a name containing the query text.
  const results = [];

  const query = name.toLowerCase();

  const request = employeeDb
    .transaction(['employees'], 'readonly')
    .objectStore('employees')
    .openCursor();
  

  // The cursor request will emit a `success` event for each object it finds
  request.addEventListener('success', () => {
    const cursor = request.result;
    if (cursor) {
      const name = `${cursor.value.firstName} ${cursor.value.lastName}`.toLowerCase();
      // Add the contact to the result array if it matches the query.
      if (name.includes(query)) {
        results.push(cursor.value);
      }

      // Continue to the next record.
      cursor.continue();
    } else {
      onSuccess(results);
    }
  });

  request.addEventListener('error', () => {
    console.error('Error searching employees:', request.error);
  });
}
