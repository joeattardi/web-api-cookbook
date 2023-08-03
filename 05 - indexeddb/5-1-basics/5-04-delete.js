/**
 * Example 5-4. Deleting a contact
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Deletes a contact from the database, then re-renders the table.
 * @param contactsDb The IndexedDB database.
 * @param contact The contact object to delete
 * @param onSuccess A callback function that is executed when the contact is deleted
 */
function deleteContact(contactsDb, contact, onSuccess) {
  const request = contactsDb
    .transaction(['contacts'], 'readwrite')
    .objectStore('contacts')
    .delete(contact.id);

  request.addEventListener('success', () => {
    console.log('Deleted contact:', contact);
    onSuccess();
  });

  request.addEventListener('error', () => {
    console.error('Error deleting contact:', request.error);
  });
}
