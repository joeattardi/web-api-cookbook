try {
  // Make the request
  const response = await fetch('https://swapi.dev/api/people/1');
  // Parse the response body as an object
  const person = await response.json();
  console.log(person.name); // prints 'Luke Skywalker'
} catch (error) {
  console.error('Couldn\'t fetch Luke:', error.message)
}
