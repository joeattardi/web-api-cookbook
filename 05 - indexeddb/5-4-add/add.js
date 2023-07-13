// Adding new data means a read-write transaction is required.
const transaction = db.transaction(['todos'], 'readwrite');
const store = transaction.objectStore('todos');

// This will result in an error if a duplicate key is found
const request = store.add(todo);

request.addEventListener('success', () => {
  console.log('Todo was added');
});

request.addEventListener('error', () => {
  console.error('Error adding todo:', request.error);
});
