let db;

// Create an IDBOpenDBRequest object to open the `contacts` database.
const request = indexedDB.open('contacts');

// If the database doesn't exist, an `upgradeneeded` event is triggered.
// The event is an IDBVersionChangeEvent.
request.addEventListener('upgradeneeded', event => {
  // The event's target is the request object. Once the database is available,
  // it is set as the `result` property of the request.
  const db = event.target.result;

  // Create the todos object store, where todo objects will be persisted.
  // Each object is indexed using its `id` property as its key.
  const contactStore = db.createObjectStore('contacts', {
    keyPath: 'id'
  });

  // The first argument is the name of the index itself, and the second is the key path
  // to index.
  contactStore.createIndex('lastName', 'lastName');
});

request.addEventListener('success', () => {
  db = request.result;
});

request.addEventListener('error', () => {
  console.error('Error opening database:', request.error);
});

function getSortedContacts() {
  // Create a read-only transaction and get access to the last name index.
  const transaction = db.transaction(['contacts'], 'readonly');
  const store = transaction.objectStore('contacts');
  const index = store.index('lastName');

  // Calling `getAll` on the index rather than the object store.
  const request = index.getAll();

  request.addEventListener('success', event => {
    console.log('Got sorted contacts:', request.result);
  });

  request.addEventListener('error', () => {
    console.error('Error getting sorted contacts:', request.error);
  });
}
