/**
 * Example 15-12. Sending performance entries in batches
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const analyticsEndpoint = 'https://example.com/api/analytics';

// An array to hold buffered entries. Once the buffer reaches the desired size,
// all entries are sent in a single request.
const BUFFER_SIZE = 10;
let buffer = [];

const observer = new PerformanceObserver(entries => {
  for (let entry of entries.getEntries()) {
    if (entry.initiatorType === 'fetch' && entry.name !== analyticsEndpoint) {
      buffer.push(entry);
    }

    // If the buffer has reached its target size, send the analytics request.
    if (buffer.length === BUFFER_SIZE) {
      fetch(analyticsEndpoint, {
        method: 'POST',
        body: JSON.stringify(buffer),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Reset the buffer now that the batched entries have been sent
      buffer = [];
    }
  }
});

observer.observe({ type: 'resource' });
