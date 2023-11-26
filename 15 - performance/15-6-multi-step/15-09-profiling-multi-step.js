/**
 * Example 15-9. Profiling a multi-step process
 * From "Web Browser API Cookbook" by Joe Attardi
 */

window.performance.mark('transactions-start');
const transactions = await fetch('/api/users/123/transactions');
window.performance.mark('transactions-end');
window.performance.mark('process-start');
const analytics = processAnalytics(transactions);
window.performance.mark('process-end');
window.performance.mark('upload-start');
await fetch('/api/analytics', {
  method: 'POST',
  body: JSON.stringify(analytics),
  headers: {
    'Content-Type': 'application/json'
  }
});
window.performance.mark('upload-end');
