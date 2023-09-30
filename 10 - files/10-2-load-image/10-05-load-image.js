/**
 * Example 10-5. Loading an image into the page
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Loads and shows an image from a file.
 * @param file the File object containing the image data
 * @param imageElement A placeholder Image element that will 
 *                     show the image data.
 */
function showImageFile(file, imageElement) {
  const reader = new FileReader();

  reader.addEventListener('load', event => {
    // Set the data URL directly as the image's
    // `src` attribute to load the image.
    imageElement.src = event.target.result;
  });

  reader.addEventListener('error', event => {
    console.log('error', event);
  });

  reader.readAsDataURL(file);
}

const fileInput = document.querySelector('#select-file');
fileInput.addEventListener('change', event => {
  showImageFile(
    fileInput, 
    document.querySelector('#placeholder-image')
  );
});
