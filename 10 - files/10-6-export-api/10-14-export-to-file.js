/**
 * Example 10-14. Exporting data to a local file
 * From "Web Browser API Cookbook" by Joe Attardi
 */

async function exportData(data) {
  // Use the helper function defined previously
  const outputFile = await selectOutputFile();

  // Only proceed if an output file was actually selected
  if (outputFile) {
    try {
      // Prepare a writable stream, which is used to save the file
      // to disk.
      const stream = await outputFile.createWritable();

      // Write the JSON, in a human readable format, to the stream.
      await stream.write(JSON.stringify(userList, null, 2));
      await stream.close();

      // Show a success message.
      document.querySelector('#export-success').classList.remove('d-none');
    } catch (error) {
      console.error(error);
    }
  }
}
