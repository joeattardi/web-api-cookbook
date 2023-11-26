/**
 * Example 15-1. Looking up the navigation timing performance entry
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// There is only one navigation performance entry.
const [navigation] = window.performance.getEntriesByType('navigation');
