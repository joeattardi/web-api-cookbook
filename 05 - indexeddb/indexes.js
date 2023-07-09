const request = indexedDB.open('todos-index');
request.addEventListener('upgradeneeded', (event) => {
  db = event.target.result;

  // New todo objects will be given an auto-generated 
  // `id` property which serves as its key.
  const todosStore = db.createObjectStore('todos', {
    keyPath: 'id',
    autoIncrement: true,
  });

  // Create an index on the `completed` property.
  todosStore.createIndex('completed', 'completed');
});

/**
 * Gets todo items by querying an index.
 * @param db The IndexedDB database
 * @param showCompleted A boolean flag indicating whether or not you want to include completed todos.
 * @return A `Promise` that resolves to an array containing the matching todo items.
 */
function getTodos(db, showCompleted) {
  return new Promise((resolve, reject) => {
    // Only querying, so a readonly transaction will suffice.
    const transaction = db.transaction(['todos'], 'readonly');
    const store = transaction.objectStore('todos');

    // Access the store's `completed` index.
    const index = store.index('completed');

    // If `showCompleted` is `true, use a key range to include both
    // incomplete (0) and completed (1). Otherwise, just use incomplete (0).
    const keyRange = showCompleted ?
      IDBKeyRange.bound(0, 1) :
      IDBKeyRange.only(0);

    // Get all objects indexed within the given key range.
    const request = index.getAll(keyRange);

    request.addEventListener('success', event => resolve(event.target.result));
    request.addEventListener('error', reject);
  });
}