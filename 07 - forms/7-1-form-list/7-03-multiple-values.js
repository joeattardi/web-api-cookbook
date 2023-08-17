/**
 * Example 7-3. Multiple values under one key
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const data = new FormData();

data.append('role', 'admin');
data.append('role', 'user');
data.append('name', 'sysadmin');

for (const [key, value] of data.entries()) {
  console.log(key, value);
}
