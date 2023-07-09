const username = 'sysadmin'
const password = 'password';

fetch('https://httpbin.org/post', {
  method: 'POST',
  body: 'username=sysadmin&password=password',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})
  .then(response => response.json())
  .then(data => console.log('Logged in!', data))
  .catch(error => console.error('Request failed:', error));
  