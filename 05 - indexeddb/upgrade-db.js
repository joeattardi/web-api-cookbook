function openDatabase() {
  return new Promise((resolve, reject) => {
    // todoList database is now at version 2
    const request = indexedDB.open('todoList', 2);

    // If the user's database is still at version 1, an `upgradeneeded` event
    // is triggered so that the new object store can be added.
    request.addEventListener('upgradeneeded', event => {
      const db = event.target.result;

      // This event is also triggered when no database exists yet, so you still need
      // to handle this case and create the `todos` object store.
      // The `oldVersion` property specifies the user's current version of the database. If the
      // database is just being created, the version is `0`.
      if (event.oldVersion < 1) {
        db.createObjectStore('todos', {
          keyPath: 'id'
        });
      }

      // If this database has not yet been upgraded to version 2, create the new object store.
      if (event.oldVersion < 2) {
        db.createObjectStore('people', {
          keyPath: 'id'
        });
      }
    });

    // Once the database is created or opened, resolve the `Promise` with the
    // database object itself.
    request.addEventListener('success', event => resolve(event.target.result));

    // Reject the `Promise` if there's an error.
    request.addEventListener('error', reject);
  });
}
