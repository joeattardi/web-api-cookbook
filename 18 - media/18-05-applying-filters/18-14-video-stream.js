/**
 * Example 18-14. Setting up the video stream
 * From "Web Browser API Cookbook" by Joe Attardi
 */

async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ 
    video: true, 
    audio: false 
  });

  // Hook up the video element to the stream.
  preview.srcObject = stream;
  preview.play();

  // Resize the canvas based on the device pixel density
  // This helps prevent a blurred or pixellated image.
  canvas.width = canvas.width * window.devicePixelRatio;
  canvas.height = canvas.height * window.devicePixelRatio;
  const context = canvas.getContext('2d');

  // Target frame rate of 30 FPS - draw each frame to the canvas
  setInterval(() => {
    context.drawImage(preview, 0, 0, canvas.width, canvas.height);
  }, 30 / 1000);
}
