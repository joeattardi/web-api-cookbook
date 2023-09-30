/**
 * Example 7-4. Remembering the username field
 * From "Web Browser API Cookbook" by Joe Attardi
 */
const form = document.querySelector('#login-form');

const username = localStorage.getItem('username');
if (username) {
  form.elements.username.value = username;
}

form.addEventListener('submit', event => {
  const data = new FormData(form);
  localStorage.setItem('username', data.get('username'));
});
