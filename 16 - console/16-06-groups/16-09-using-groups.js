/**
 * Example 16-9. Using console groups
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const users = [
  { id: 1, firstName: "John", lastName: "Smith", department: "Sales" },
  { id: 2, firstName: "Emily", lastName: "Johnson", department: "Marketing" },
  { id: 3, firstName: "Michael", lastName: "Davis", department: "Human Resources" },
  { id: 4, firstName: "Sarah", lastName: "Thompson", department: "Finance" },
  { id: 5, firstName: "David", lastName: "Wilson", department: "Engineering" }
]; 

console.log('Updating user data');
for (const user of users) {
  console.group(`User: ${user.firstName} ${user.lastName}`);
  console.log('Loading employee data from API');
  const response = await fetch(`/api/users/${user.id}`);
  const userData = await response.json();

  console.log('Updating profile');
  userData.lastUpdated = Date.now();

  console.log('Saving user data');
  await fetch(`/api/users/${user.id}`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.groupEnd();
}
