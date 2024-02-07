/**
 * Example 18-10. Adding button event handlers
 * From "Web Browser API Cookbook" by Joe Attardi
 */

document.querySelector('#record-button').addEventListener('click', () => {
  mediaRecorder.start();
});

document.querySelector('#stop-record-button').addEventListener('click', () => {
  mediaRecorder.stop();
});
