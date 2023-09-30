/**
 * Example 10-9. Reading the dropped file
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function showDroppedFile(file) {
  // Read the file data and insert the loaded image
  // into the page.
  const reader = new FileReader();
  reader.addEventListener('load', event => {
    const image = document.querySelector('#placeholder');
    image.src = event.target.result;
  });

  reader.readAsDataURL(file);
}
