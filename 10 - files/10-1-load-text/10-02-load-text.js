/**
 * Example 10-2. Loading plain text from a file
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Reads the text content of a file.
 * @param file the File object containing the data to be read
 * @param onSuccess a function to call when the data is available
 */
function readFileContent(file, onSuccess) {
  const reader = new FileReader();

  // When the content is loaded, the reader will emit a
  // `load` event
  reader.addEventListener('load', event => {
    onSuccess(event.target.result);
  });

  // Always handle errors!
  reader.addEventListener('error', event => {
    console.error('Error reading file:', event);
  });

  // Start the file read operation.
  reader.readAsText(file);
}

const fileInput = document.querySelector('#select-file');

// The input fires a `change` event when a file is selected
fileInput.addEventListener('change', event => {
  // This is an array, because a file input can be used to select
  // multiple files. Here, there's only once file selected.
  // This is using array destructuring syntax to get the first file.
  const [file] = fileInput.files;

  readFileContent(file, content => {
    console.log('Got file content:', content);
  });
});
