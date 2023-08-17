/**
 * Example 7-5. Submitting a form as JSON using Fetch
 * From "Web Browser API Cookbook" by Joe Attardi
 */

form.addEventListener('submit', event => {
  // Important: Stop the browser from automatically submitting the form
  event.preventDefault();

  // Create a new FormData containing this form's data, then add each
  // key-value pair to the response body.
  const data = new FormData(event.target);
  const body = {};
  for (const [key, value] of data.entries()) {
    body[key] = value;
  }

  // Send the JSON body to the form endpoint
  fetch('/api/form', {
    method: 'POST',

    // The object must be converted to a JSON string
    body: JSON.stringify(body),

    // Tell the server you're sending JSON
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(body => console.log('Got response:', body));
});
