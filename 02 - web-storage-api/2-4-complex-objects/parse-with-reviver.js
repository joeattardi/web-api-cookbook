/**
 * Example 2-9. Parsing with the reviver
 * From "Web Browser API Cookbook" by Joe Attardi
 * 
 * Demonstrates parsing an object using the reviver function
 * from Example 2-8.
 */

const object = JSON.parse(userProfile, reviver);
