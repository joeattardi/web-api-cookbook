/**
 * Deletes a todo item from the todo database.
 * 
 * @param db the todo database that was opened previously
 * @param todo the todo object to delete
 * @returns a Promise that resolves to the success event once the object is deleted
 */
function deleteTodo(db, todo) {
  return new Promise((resolve, reject) => {
    // Need a read-write transaction to perform a delete.
    const transaction = db.transaction(['todos'], 'readwrite');
    const store = transaction.objectStore('todos');

    // Pass the key of the object to be deleted.
    const request = store.delete(todo.id);

    request.addEventListener('success', resolve);
    request.addEventListener('error', reject);
  });
}
