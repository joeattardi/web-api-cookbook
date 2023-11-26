/**
 * Example 16-10. Using counters
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const users = [
  { id: 1, firstName: "John", lastName: "Smith", department: "Sales" },
  { id: 2, firstName: "Emily", lastName: "Johnson", department: "Marketing" },
  { id: 3, firstName: "Michael", lastName: "Davis", department: "Human Resources" },
  { id: 4, firstName: "Sarah", lastName: "Thompson", department: "Finance" },
  { id: 5, firstName: "David", lastName: "Wilson", department: "Engineering" }
];

users.forEach(user => {
  console.count('user');
});
