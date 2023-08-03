/**
 * Example 5-7. Adding and re-rendering contacts
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const newContact = { name: 'Connie Myers', email: 'cmyers@example.com' };
addContact(contactsDb, newContact, () => {
  // Contact has been added, now load the updated list and render it
  getContacts(contactsDb, contacts => {
    renderContacts(contacts);
  })
});
