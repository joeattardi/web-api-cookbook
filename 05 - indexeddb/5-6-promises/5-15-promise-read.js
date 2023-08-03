/**
 * Example 5-15. Getting objects from a store with a Promise
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Reads the contacts from the database.
 * @returns a Promise that is resolved with the contacts, or rejected with an error
 */
function getContacts() {
  return new Promise((resolve, reject) => {
    const request = contactsDb
      .transaction(['contacts'], 'readonly')
      .objectStore('contacts')
      .getAll();

    request.addEventListener('success', () => {
      console.log('Got contacts:', request.result);
      resolve(request.result);
    });

    request.addEventListener('error', () => {
      console.error('Error loading contacts:', request.error);
      reject(request.error);
    });
  });
}
