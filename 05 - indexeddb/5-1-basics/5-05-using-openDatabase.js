/**
 * Example 5-5. Using the openDatabase function
 * From "Web Browser API Cookbook" by Joe Attardi
 */

let contactsDb;

// Open the database and do the initial contact list render.
// The success handler sets `contactsDb` to the new database object for later use,
// then loads and renders the contacts.
openDatabase(db => {
  contactsDb = db;
  renderContacts(contactsDb);
});
