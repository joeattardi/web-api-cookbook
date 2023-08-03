/**
 * Example 3-12. Using the getQueryParameters function
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// The name parameter contains a percent-encoded ampersand character (%26)
getQueryParameters('https://example.com/api/search?name=luke%26ben');
