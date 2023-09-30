/**
 * Example 10-7. Playing the video file
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const fileInput = document.querySelector('#file-upload');
const video = document.querySelector('#video-player');

fileInput.addEventListener('change', event => {
  const [file] = fileInput.files;

  // File extends from Blob, which can be passed to
  // createObjectURL.
  const objectUrl = URL.createObjectURL(file);

  // The <video> element can take the object URL to load the video
  video.src = objectUrl;
});
