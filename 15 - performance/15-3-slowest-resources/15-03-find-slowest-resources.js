/**
 * Example 15-3. Finding the 5 slowest loading resources
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const slowestResources = window.performance.getEntriesByType('resource')
  .sort((a, b) => 
    (b.responseEnd - b.startTime) - (a.responseEnd - a.startTime))
  .slice(0, 5);
  