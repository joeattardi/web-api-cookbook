/**
 * Example 7-2. Converting to an array first
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const data = new FormData(form);

[...data.entries()].forEach(([key, value]) => {
  console.log(key, value);
});
