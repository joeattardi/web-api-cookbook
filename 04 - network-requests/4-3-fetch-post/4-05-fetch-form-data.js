/**
 * Example 4-5. Sending form data in a POST request
 * From "Web Browser API Cookbook" by Joe Attardi
 */

fetch('/login', {
  method: 'POST',
  body: 'username=sysadmin&password=password',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})
  .then(response => response.json())
  .then(data => console.log('Logged in!', data))
  .catch(error => console.error('Request failed:', error));
  