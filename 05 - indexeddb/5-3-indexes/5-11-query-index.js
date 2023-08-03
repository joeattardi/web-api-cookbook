/**
 * Example 5-11. Querying the employees by the department index
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Gets the employees for a given department, or all employees
 * if no department is given.
 * 
 * @param department The department to filter by
 * @param onSuccess A callback function that is executed when the employees are loaded
 */
function getEmployees(department, onSuccess) {
  const request = employeeDb
    .transaction(['employees'], 'readonly')
    .objectStore('employees')
    .index('department')
    .getAll(department);

  request.addEventListener('success', () => {
    console.log('Got employees:', request.result);
    onSuccess(request.result);
  });

  request.addEventListener('error', () => {
    console.log('Error loading employees:', request.error);
  });
}
