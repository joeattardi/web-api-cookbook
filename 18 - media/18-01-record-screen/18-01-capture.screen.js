/**
 * Example 18-1. Capturing a video of the screen
 * From "Web Browser API Cookbook" by Joe Attardi
 */

async function captureScreen() {
  const stream = await navigator.mediaDevices.getDisplayMedia();
  const mediaRecorder = new MediaRecorder(stream, {
    mimeType: 'video/webm'
  });
 
  mediaRecorder.addEventListener('dataavailable', event => {
    const blob = new Blob([event.data], {
      type: 'video/webm',
    });

    const url = URL.createObjectURL(blob);
    video.src = url;
  });

  mediaRecorder.start();
}
