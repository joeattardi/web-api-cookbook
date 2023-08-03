/**
 * Example 4-6. Sending file data with the Fetch API
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Given a form with a `file` input, sends a POST request containing
 * the file data in its body.
 * @param form the form object (should have a file input with the name `file`)
 * @returns a Promise that resolves when the response JSON is received
 */
function uploadFile(form) {
  const formData = new FormData(form);
  const fileData = formData.get('file');
  return fetch('https://httpbin.org/post', {
    method: 'POST',
    body: fileData
  })
    .then(response => response.json());
}
