/**
 * Example 15-4. Finding the 5 fastest resources
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const fastestResources = window.performance.getEntriesByType('resource')
  .sort((a, b) => 
    (a.responseEnd - a.startTime) - (b.responseEnd - b.startTime))
  .slice(0, 5);
  