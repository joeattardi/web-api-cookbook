/**
 * Example 10-17. Uploading a dropped file
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const target = document.querySelector('.drop-target');

target.addEventListener('drop', event => {
  // Cancel the drop event. Otherwise, the browser will leave the page
  // and navigate to the file directly.
  event.preventDefault();

  // Get the selected file data.
  const [item] = event.dataTransfer.items;
  const file = item.getAsFile();

  if (file.type.startsWith('image/')) {
    fetch('/api/uploadFile', {
      method: 'POST',
      body: file
    });
  }
});

// You need to cancel the dragover event as well, to prevent the
// file from replacing the full page content
target.addEventListener('dragover', event => {
  event.preventDefault();
});
