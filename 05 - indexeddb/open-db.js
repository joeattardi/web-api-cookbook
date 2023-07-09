function openDatabase() {
  return new Promise((resolve, reject) => {
    // Create an IDBOpenDBRequest object to open the `todoList` database.
    const request = indexedDB.open('todoList');

    // If the database doesn't exist, an `upgradeneeded` event is triggered.
    // The event is an IDBVersionChangeEvent.
    request.addEventListener('upgradeneeded', event => {
      // The event's target is the request object. Once the database is available,
      // it is set as the `result` property of the request.
      const db = event.target.result;

      // Create the todos object store, where todo objects will be persisted.
      // Each object is indexed using its `id` property as its key.
      db.createObjectStore('todos', {
        keyPath: 'id'
      });
    });

    // Once the database is created or opened, resolve the `Promise` with the
    // database object itself.
    request.addEventListener('success', event => resolve(event.target.result));

    // Reject the `Promise` if there's an error.
    request.addEventListener('error', reject);
  });
}
