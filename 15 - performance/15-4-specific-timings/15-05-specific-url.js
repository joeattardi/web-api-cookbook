/**
 * Example 15-5. Finding all resource timings for a specific URL
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// Look up all requests to the /api/users API
const entries = window.performance.getEntriesByName('https://localhost/api/users', 'resource');
