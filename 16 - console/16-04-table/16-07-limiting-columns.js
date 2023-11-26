/**
 * Example 16-7. Limiting table columns
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const users = [
  { firstName: "John", lastName: "Smith", department: "Sales" },
  { firstName: "Emily", lastName: "Johnson", department: "Marketing" },
  { firstName: "Michael", lastName: "Davis", department: "Human Resources" },
  { firstName: "Sarah", lastName: "Thompson", department: "Finance" },
  { firstName: "David", lastName: "Wilson", department: "Engineering" }
]; 

console.table(users, ['firstName', 'lastName']);
