/**
 * Example 12-13. Listening for the feedback event
 * From "Web Browser API Cookbook" by Joe Attardi
 */

document.querySelector('feedback-rating').addEventListener('feedback', event => {
  // Get the value of the feedback component's `helpful` property and send it to an
  // endpoint with a POST request.
  fetch('/api/analytics/feedback', {
    method: 'POST',
    body: JSON.stringify({ helpful: event.target.helpful }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
});
