/**
 * Example 3-2. Creating a relative URL on the same origin
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const usersApiUrl = new URL('/api/users', window.location);
