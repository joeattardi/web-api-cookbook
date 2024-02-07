/**
 * Example 18-9. Setting up the MediaRecorder
 * From "Web Browser API Cookbook" by Joe Attardi
 */

mediaRecorder = new MediaRecorder(stream, {
  mimeType: 'video/webm'
});

mediaRecorder.addEventListener('dataavailable', event => {
  const blob = new Blob([event.data], {
    type: 'video/webm',
  });

  const url = URL.createObjectURL(blob);
  
  // Clear the `muted` flag so that the playback will 
  // include audio.
  preview.muted = false;

  // Reset the source of the video element to the object
  // URL just created.
  preview.srcObject = null;
  preview.src = url;

  // Start playing the recording immediately.
  preview.autoplay = true;
  preview.loop = true;
  preview.controls = true;
});
