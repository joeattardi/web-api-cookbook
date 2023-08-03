/**
 * Example 5-14. Creating a database with a Promise
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Opens the database, creating the object store if needed.
 * @returns a Promise that is resolved with the database, or rejected with an error
 */
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('contacts-promise');

    // Create the object store if needed
    request.addEventListener('upgradeneeded', () => {
      const db = request.result;
      db.createObjectStore('contacts', {
        keyPath: 'id',
        autoIncrement: true
      });
    });

    request.addEventListener('success', () => resolve(request.result));
    request.addEventListener('error', () => reject(request.error));
  });
}
