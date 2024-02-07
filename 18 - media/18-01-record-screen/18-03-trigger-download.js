/**
 * Example 18-3. Triggering a download with a hidden link
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const link = document.createElement('a');

// Here, `url` is the object URL created in the captureScreen method
link.href = url;
link.textContent = 'Download';
link.download = 'screen-recording.webm';
link.click();
