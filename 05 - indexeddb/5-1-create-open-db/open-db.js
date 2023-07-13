let db;

// Initialize the database, either opening the existing one
// or creating a new one.
const request = indexedDB.open('todos-index');

// Handle the upgradeneeded event, creating the object store
// and its index.
request.addEventListener('upgradeneeded', (event) => {
  db = event.target.result;

  // New todo objects will be given an auto-generated 
  // `id` property which serves as its key.
  const todosStore = db.createObjectStore('todos', {
    keyPath: 'id',
    autoIncrement: true,
  });

  // Create an index on the `completed` property called `completedIndex`.
  todosStore.createIndex('completedIndex', 'completed');
});

request.addEventListener('success', () => {
  // The database itself is in the request's `result` property
  db = request.result;

  // Start using the database!
});

// Log any error that might have occurred. The error object is
// stored in the request's `error` property.
request.addEventListener('error', () => {
  console.error('Error opening database:', request.error);
});
