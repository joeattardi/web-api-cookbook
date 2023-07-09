/**
 * Gets all objects from the `todos` object store.
 * 
 * @param db An IndexedDB database that was previously opened
 * @returns a Promise that resolves to an array containing the objects from the store
 */
function getAllUsers(db) {
  return new Promise((resolve, reject) => {
    // A read-only transaction will be sufficient here since you're
    // only reading data, not writing it.
    const transaction = db.transaction(['todos'], 'readonly');
    const store = transaction.objectStore('todos');

    // Request all todo objects in this store.
    const request = store.getAll();

    // When the data is ready, resolve the `Promise` with the query result.
    request.addEventListener('success', (event) =>
      resolve(event.target.result)
    );

    // Handle any errors that may have occurred.
    request.addEventListener('error', reject);
  });
}
