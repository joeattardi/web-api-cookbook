/**
 * Adds an object to the `todos` object store.
 * 
 * @param db An IndexedDB database that was previously opened
 * @param todo A new todo object to add
 * @returns a Promise that resolves once the object is added
 */
function addTodo(db, todo) {
  return new Promise((resolve, reject) => {
    // Adding new data means a read-write transaction is required.
    const transaction = db.transaction(['todos'], 'readwrite');
    const store = transaction.objectStore('todos');

    // This will result in an error if a duplicate key is found
    const request = store.add(todo);

    // Resolve the promise once the add operation is complete.
    request.addEventListener('success', resolve);

    // Reject in case of an error.
    request.addEventListener('error', reject);
  });
}
