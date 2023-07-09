/**
 * Loads a person from the Star Wars API.
 * @param personId The ID of the person to load.
 */
function loadPerson(personId) {
  const request = new XMLHttpRequest();
  
  // Wrapping the previous example in a Promise.
  return new Promise((resolve, reject) => {
    // When the data is loaded, resolve the Promise
    // with the parsed JSON.
    request.addEventListener('load', event => {
      resolve(JSON.parse(event.target.responseText));
    });

    // If there's an error, reject the Promise
    request.addEventListener('error', event => {
      reject(event);
    });

    // Begin the request as before
    request.open('GET', `https://swapi.dev/api/people/${id}`);
    request.send();
  });
}

getPerson(1).then(person => {
  console.log(`Hello, ${person.name}!`); // prints "Hello, Luke Skywalker!"
});
