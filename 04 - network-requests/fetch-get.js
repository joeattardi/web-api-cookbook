function fetchPerson(personId) {
  // Make the request
  return fetch(`https://swapi.dev/api/people/${personId}`)
    // Parse the response body as an object
    .then(response => response.json())
    // Handle errors, including network and JSON parsing errors
    .catch(error => console.error('Couldn\'t fetch:', error.message));
  }
  