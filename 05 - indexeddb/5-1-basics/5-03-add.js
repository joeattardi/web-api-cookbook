/**
 * Example 5-3. Adding a contact
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Adds a new contact to the database, then re-renders the table.
 * @param contactsDb The IndexedDB database.
 * @param contact The new contact object to add
 * @param onSuccess A callback function that is executed when the contact is added
 */
function addContact(contactsDb, contact, onSuccess) {
  const request = contactsDb
    .transaction(['contacts'], 'readwrite')
    .objectStore('contacts')
    .add(contact);

  request.addEventListener('success', () => {
    console.log('Added new contact:', contact);
    onSuccess();
  });

  request.addEventListener('error', () => {
    console.error('Error adding contact:', request.error);
  });
}
