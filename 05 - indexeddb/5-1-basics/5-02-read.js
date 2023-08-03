/**
 * Example 5-2. Reading the contacts
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Reads the contacts from the database, and renders them in the table.
 * @param contactsDb The IndexedDB database.
 * @param onSuccess A callback function that is executed when the contacts are loaded
 */
function getContacts(contactsDb, onSuccess) {
  const request = contactsDb
    .transaction(['contacts'], 'readonly')
    .objectStore('contacts')
    .getAll();


  // When the data has been loaded, the database triggers a `success` event on the
  // request object.
  request.addEventListener('success', () => {
    console.log('Got contacts:', request.result);
    onSuccess(request.result);
  });

  request.addEventListener('error', () => {
    console.error('Error loading contacts:', request.error);
  });
}
