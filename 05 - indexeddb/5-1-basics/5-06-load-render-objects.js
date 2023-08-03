/**
 * Example 5-6. Loading and rendering contacts
 * From "Web Browser API Cookbook" by Joe Attardi
 */

getContacts(contactsDb, contacts => {
  // Contacts have been loaded, now render them
  renderContacts(contacts);
});
