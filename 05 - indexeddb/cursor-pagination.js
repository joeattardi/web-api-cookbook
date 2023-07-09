/**
 * Uses a cursor to fetch a single "page" of data from an IndexedDB object store.
 *
 * @param db The IndexedDB database object
 * @param storeName The name of the object store
 * @param offset The starting offset (0 being the first item)
 * @param length The number of items after the offset to return
 * @return A Promise that will be fulfilled with an array of objects from the database
 */
function getPaginatedRecords(db, storeName, offset, length) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.openCursor();

    // This array contains the records collected by the cursor.
    const results = [];

    // This flag indicates whether or not the cursor has skipped ahead to the offset yet.
    let skipped = false;

    request.addEventListener('success', event => {
      const cursor = event.target.result;

      if (!skipped) {
        // First time through the cursor, we haven't skipped ahead yet.
        // Set the flag and skip ahead by the given offset. Next time around,
        // the cursor will be in the starting position and can start collecting records.
        skipped = true;
        cursor.advance(offset);
      } else if (cursor && result.length < length) {
        // The cursor has skipped ahead, there are records remaining, and the desired length
        // has not yet been reached.

        // Collect the record the cursor is currently pointing to.
        results.push(cursor.value);

        // Continue on to the next record.
        cursor.continue();
      } else {
        // There are either no records left, or the length has been reached. All records within the given
        // range are ready, so resolve the `Promise` with the collected records.
        resolve(results);
      }
    });

    request.addEventListener('error', event => {
      reject(event);
    })
  });
}
