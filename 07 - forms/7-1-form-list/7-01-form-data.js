/**
 * Example 7-1. Iterating over the form data
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const data = new FormData(form);

for (const [key, value] of data.entries()) {
  console.log(key, value);
}
