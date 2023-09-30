/**
 * Example 10-12. Selecting an output file
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Shows a save file picker and returns the selected file handle.
 * @returns a file handle to the selected file, or null if the user clicked Cancel
 */
async function selectOutputFile() {
  try {
    return window.showSaveFilePicker({
      // The default name for the output file
      suggestedName: 'users.json',

      // Limit the available file extensions
      types: [
        { description: "JSON", accept: { "application/json": [".json"] } }
      ]
    });
  } catch (error) {
    // If the user clicks Cancel, an exception is thrown. In this case,
    // return null to indicate no file was selected.
    return null;
  }
}
