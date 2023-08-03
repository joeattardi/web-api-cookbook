/**
 * Example 5-4. Defining an index when the object store is created
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Opens the database, creating the object store and index if needed.
 * Once the database is ready, `onSuccess` will be called with the database object.
 * 
 * @param onSuccess A callback function that is executed when the database is ready
 */
function openDatabase(onSuccess) {
  const request = indexedDB.open('employees');

  request.addEventListener('upgradeneeded', () => {
    const db = request.result;

    // New employee objects will be given an auto-generated 
    // `id` property which serves as its key.
    const employeesStore = db.createObjectStore('employees', {
      keyPath: 'id',
      autoIncrement: true,
    });

    // Create an index on the `department` property called `department`.
    employeesStore.createIndex('department', 'department');
  });

  request.addEventListener('success', () => {
    onSuccess(request.result);
  });
}

