/**
 * Loads a person from the Star Wars API, using
 * XMLHttpRequest.
 */
function loadPerson(personId) {
  const request = new XMLHttpRequest();

  request.addEventListener('load', event => {
    // The event target is the XHR itself; it contains a 
    // responseText property that we can use to create a JavaScript object from
    // the JSON text.
    const person = JSON.parse(event.target.responseText);
    console.log('Got person:', person);
  });

  // Handle any potential errors with the request.
  // This only handles network errors. If the request 
  // returns an error status like 404, the `load` event still fires
  // where you can inspect the status code.
  request.addEventListener('error', err => {
    console.log('Error!', err);
  });

  request.open('GET', `https://swapi.dev/api/people/${personId}`);
  request.send();
}
