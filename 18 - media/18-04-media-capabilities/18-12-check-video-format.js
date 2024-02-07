/**
 * Example 18-12. Checking for a supported video format
 * From "Web Browser API Cookbook" by Joe Attardi
 */

navigator.mediaCapabilities.decodingInfo({
  type: 'file',
  video: {
    contentType: 'video/webm;codecs=vp8',
    bitrate: 4000000, // 4 MB
    framerate: 30,
    width: 1920,
    height: 1080
  }
}).then(result => {
  if (result.supported) {
    // This WebM configuration is supported
  }
});
