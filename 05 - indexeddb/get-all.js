// A read-only transaction will be sufficient here since you're
// only reading data, not writing it.
const transaction = db.transaction(['todos'], 'readonly');
const store = transaction.objectStore('todos');

// Request all todo objects in this store.
const request = store.getAll();

// The request emits the `success` event when the data is ready.
// The todos are in the request's `result` property, stored as an array.
request.addEventListener('success', () => {
  // The data has been loaded
  console.log('Got todos:', request.result);
});

// If the `error` event is emitted, `request.error` is the actual
// error object.
request.addEventListener('error', () => {
  console.error('Error querying database:', request.error);
});