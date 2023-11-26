/**
 * Example 15-10. Generating measures
 * From "Web Browser API Cookbook" by Joe Attardi
 */

console.log('Download transactions:', 
  window.performance.measure(
    'transactions', 'transactions-start', 'transactions-end'
  ).duration
);

console.log('Process analytics:',
  window.performance.measure(
    'analytics', 'process-start', 'process-end'
  ).duration
);

console.log('Upload analytics:',
  window.performance.measure(
    'upload', 'upload-start', 'upload-end'
  ).duration
);

console.log('Total time:',
  window.performance.measure(
    'total', 'transactions-start', 'upload-end'
  ).duration
);
