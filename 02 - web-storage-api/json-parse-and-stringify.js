// Constant indicating the key within local storage that the todo list
// is saved under.
const storageKey = 'todos';

// Array containing the todo items.
let todoList = loadTodoList();

/**
 * Loads the todo list from local storage.
 * @returns the previously saved list, or an empty array if there was no saved list.
 */
function loadTodoList() {
  return JSON.parse(localStorage.getItem(storageKey)) || [];
}

/**
 * Takes the curent todo list and saves it to local storage.
 */
function saveTodoList() {
  localStorage.setItem(storageKey, JSON.stringify(todoList));
}
