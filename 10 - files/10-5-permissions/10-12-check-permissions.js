/**
 * Example 10-12. Selecting and checking permissions for a file
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Selects a file, then checks permissions, showing a request if necessary, for a file.
 * @return true if the file can be written to, false otherwise
 */
async function canAccessFile() {
  // showOpenFilePicker can select multiple files, just 
  // get the first one (with array destructuring)
  const [file] = window.showOpenFilePicker();

  let result = await file.queryPermission({ mode: 'readwrite' });
  if (result === 'prompt') {
    result = await file.requestPermission({ mode: 'readwrite' });
  }

  return result === 'granted';
}
