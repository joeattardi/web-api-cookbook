/**
 * Example 15-11. Using a PerformanceObserver
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const analyticsEndpoint = 'https://example.com/api/analytics';

const observer = new PerformanceObserver(entries => {
  for (let entry of entries.getEntries()) {
    // Only interested in 'fetch' entries. Also make sure to skip requests to the
    // analytics endpoint, otherwise the POST request below triggers an
    // infinite loop.
    if (entry.initiatorType === 'fetch' && entry.name !== analyticsEndpoint) {
      fetch(analyticsEndpoint, {
        method: 'POST',
        body: JSON.stringify(entry),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }
});

observer.observe({ type: 'resource' });
