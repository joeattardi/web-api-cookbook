/**
 * Example 5-1. Opening the database
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Opens the database, creating the object store if needed.
 * Because this is asynchronous, it takes a callback function `onSuccess`. Once the
 * database is ready, `onSuccess` will be called with the database object.
 * 
 * @param onSuccess A callback function that is executed when the database is ready
 */
function openDatabase(onSuccess) {
  const request = indexedDB.open('contacts');

  // Create the object store if needed
  request.addEventListener('upgradeneeded', () => {
    const db = request.result;

    // The contact objects will have an `id` property which will
    // be used as the key. When you add a new contact object, you don't need to
    // set an `id` property; the `autoIncrement` flag means that the database will
    // automatically set an `id` for you.
    db.createObjectStore('contacts', {
      keyPath: 'id',
      autoIncrement: true
    });
  });

  // When the database is ready for use, it triggers a `success` event.
  request.addEventListener('success', () => {
    const db = request.result;

    // Call the given callback with the database.
    onSuccess(db);
  });

  // Always handle errors!
  request.addEventListener('error', () => {
    console.error('Error opening database:', request.error);
  });
}
