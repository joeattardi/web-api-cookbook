// Need a read-write transaction to perform a delete.
const transaction = db.transaction(['todos'], 'readwrite');
const store = transaction.objectStore('todos');

// Pass the key of the object to be deleted.
const request = store.delete(todo.id);

request.addEventListener('success', () => {
  console.log('Todo was deleted');
});

request.addEventListener('error', () => {
  console.error('Error deleting todo:', request.error);
});
