/**
 * Example 5-13. Using a cursor to get a page of records
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Uses a cursor to fetch a single "page" of data from an IndexedDB object store.
 *
 * @param db The IndexedDB database object
 * @param storeName The name of the object store
 * @param offset The starting offset (0 being the first item)
 * @param length The number of items after the offset to return
 */
function getPaginatedRecords(db, storeName, offset, length) {
  const cursor = db
    .transaction([storeName], 'readonly')
    .objectStore(storeName)
    .openCursor();

  const results = [];

  // This flag indicates whether or not the cursor has skipped ahead to the offset yet.
  let skipped = false;

  request.addEventListener('success', event => {
    const cursor = event.target.result;

    if (!skipped) {
      // Set the flag and skip ahead by the given offset. Next time around,
      // the cursor will be in the starting position and can start collecting records.
      skipped = true;
      cursor.advance(offset);
    } else if (cursor && result.length < length) {
      // Collect the record the cursor is currently pointing to.
      results.push(cursor.value);

      // Continue on to the next record.
      cursor.continue();
    } else {
      // There are either no records left, or the length has been reached.
      console.log('Got records:', request.result);
    }
  });

  request.addEventListener('error', () => {
    console.error('Error getting records:', request.error);
  });
}
