/**
 * Example 18-6. Capturing the image
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// This is the <video> element
const preview = document.querySelector('#preview');

const photo = document.querySelector('#photo');
const canvas = document.querySelector('#canvas');

function captureImage() {
  // Resize the canvas based on the device pixel density
  // This helps prevent a blurred or pixellated image.
  canvas.width = canvas.width * window.devicePixelRatio;
  canvas.height = canvas.height * window.devicePixelRatio;

  // Get the 2D context from the canvas and draw the current video frame.
  const context = canvas.getContext('2d');
  context.drawImage(preview, 0, 0, canvas.width, canvas.height);

  // Create a JPEG data URL and set it as the image source.
  const dataUrl = canvas.toDataURL('image/jpeg');
  photo.src = dataUrl;
}
