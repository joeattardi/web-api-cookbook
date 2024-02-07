/**
 * Example 18-8. Opening the audio and video stream
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const preview = document.querySelector('#preview');

const stream = await navigator.mediaDevices.getUserMedia({ 
  video: true, 
  audio: true 
});
preview.srcObject = stream;
preview.play();
