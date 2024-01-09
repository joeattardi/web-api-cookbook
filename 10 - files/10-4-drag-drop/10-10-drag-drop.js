/**
 * Example 10-10. Adding the drag and drop code
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const target = document.querySelector('#drop-target');
target.addEventListener('drop', event => {
  // Cancel the drop event. Otherwise, the browser will leave the page
  // and navigate to the file directly.
  event.preventDefault();

  // Get the selected file data. `dataTransfer.items` is a 
  // `DataTransferItemList`. Each item in the list, a `DataTransferItem`, has data 
  // about an item being dropped. As this example only deals with a single file, it gets
  // the first item in the list.
  const [item] = event.dataTransfer.items;

  // Get the dropped data as a File object.
  const file = item.getAsFile();

  // Only proceed if an image file was dropped.
  if (file.type.startsWith('image/')) {
    showDroppedFile(file);
  }
});

// You need to cancel the dragover event as well, to prevent the
// file from replacing the full page content.
target.addEventListener('dragover', event => {
  event.preventDefault();
});
