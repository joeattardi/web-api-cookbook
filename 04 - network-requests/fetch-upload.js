function uploadFile(form) {
  // Assume the form has a file input with the name `file`
  const formData = new FormData(form);
  const fileData = formData.get('file');
  return fetch('https://httpbin.org/post', {
    method: 'POST',
    body: fileData
  })
    .then(response => response.json());
}
