/**
 * Example 4-1. Making a GET request with XMLHttpRequest
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Loads user data from the URL /api/users, then prints them
 * to the console.
 */
function getUsers() {
  const request = new XMLHttpRequest();

  request.addEventListener('load', event => {
    // The event target is the XHR itself; it contains a 
    // responseText property that we can use to create a JavaScript object from
    // the JSON text.
    const users = JSON.parse(event.target.responseText);
    console.log('Got users:', users);
  });

  // Handle any potential errors with the request.
  // This only handles network errors. If the request 
  // returns an error status like 404, the `load` event still fires
  // where you can inspect the status code.
  request.addEventListener('error', err => {
    console.log('Error!', err);
  });
  
  request.open('GET', '/api/users');
  request.send();
}
