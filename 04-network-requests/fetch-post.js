// The object we want to send as the body.
const user = {
  username: 'sysadmin',
  email: 'sysadmin@example.com'
};

function sendPost(body) {
  return fetch('https://httpbin.org/post', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    // No `catch` here - the code calling this function
    // should add the `catch` to handle errors in its preferred way.
    .then(response => response.json());
}

sendPost(user)
  .then(data => console.log('Got response:', data))
  .catch(error => console.error('Error', error));
