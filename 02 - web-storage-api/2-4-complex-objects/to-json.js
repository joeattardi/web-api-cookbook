function createTodo(name, due) {
  return {
    name,
    due,
    completed: false,
    toJSON() {
      return {
        name: this.name,
        completed: this.completed,
        due: this.due.getTime()
      };
    }
  }
}

const todo = createTodo('Take out the trash', new Date(2025, 5, 2));
