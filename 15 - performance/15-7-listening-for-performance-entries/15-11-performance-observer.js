/**
 * Example 15-11. Using a PerformanceObserver
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const analyticsEndpoint = 'https://example.com/api/analytics';

const observer = new PerformanceObserver(entries => {
  for (let entry of entries.getEntries()) {
    // Only interested in 'fetch' entries. 
    // Use the Beacon API to send a quick request containing the performance entry data.
    if (entry.initiatorType === 'fetch') {
      navigator.sendBeacon(analyticsEndpoint, entry);
    }
  }
});

observer.observe({ type: 'resource' });
