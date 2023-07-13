window.addEventListener('storage', event => {
  if (event.key === 'todos') {
    todoList = JSON.parse(event.newValue);
  }
});
