/**
 * Example 10-11. Handling the file input
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const fileInput = document.querySelector('#file-input');
fileInput.addEventListener('change', () => {
  const [file] = fileInput.files;
  showDroppedFile(file);
});
