/**
 * Example 18-2. Uploading the captured screen recording
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const form = new FormData();
// Here, `blob` is the blob created in the captureScreen method
formData.append('file', blob);

fetch('/api/video/upload', {
  method: 'POST',
  body: formData
});
