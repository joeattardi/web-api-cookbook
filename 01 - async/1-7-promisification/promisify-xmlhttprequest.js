/**
 * Example 1-8. Promisifying the XMLHttpRequest API
 * From "Web Browser API Cookbook" by Joe Attardi
 * 
 * Wraps the event-based XMLHttpRequest API in a Promise.
 */

/**
 * Sends a GET request to the specified URL. Returns a Promise that will resolve to the
 * JSON body parsed as an object, or will reject if there is an error or the response is not
 * valid JSON.
 */
function loadJSON(url) {
  // Create a new Promise object, performing the async work inside the
  // constructor function.
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    // If the request is successful, parse the JSON response and
    // resolve the `Promise` with the resulting object
    request.addEventListener('load', event => {
      // Wrap the JSON.parse call in a try/catch block just in case
      // the response body is not valid JSON.
      try {
        resolve(JSON.parse(event.target.responseText));
      } catch (error) {
        // There was an error parsing the response body.
        // Reject the `Promise` with this error.
        reject(error);
      }
    });

    // If the request fails, reject the `Promise` with the
    // error that was emitted
    request.addEventListener('error', error => {
      reject(error);
    });

    // Set the target URL and send the request
    request.open('GET', url);
    request.send();
  });
}
