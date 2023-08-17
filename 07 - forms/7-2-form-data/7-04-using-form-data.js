/**
 * Example 7-4. Adding data with the FormData API
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// In a real world application, the API token would be stored somewhere and
// not hard coded like this.
const apiToken = 'aBcD1234EfGh5678IjKlM';

form.addEventListener('submit', event => {
  // Important: Stop the browser from automatically submitting the form
  event.preventDefault();

  // Set up a FormData object and add the API token to it.
  const data = new FormData(event.target);
  data.set('apiToken', apiToken);

  // Use the Fetch API to send this FormData object to the endpoint.
  fetch('/api/form', {
    method: 'POST',
    body: data
  });
});
