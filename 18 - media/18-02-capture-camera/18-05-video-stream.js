/**
 * Example 18-5. Getting the video stream
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const preview = document.querySelector('#preview');

async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia(
    { 
      video: true, 
      audio: false
    }
  );
  preview.srcObject = stream;
  preview.play();
}
