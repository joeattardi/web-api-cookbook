/**
 * Example 18-11. Checking media capabilities
 * From "Web Browser API Cookbook" by Joe Attardi
 */

navigator.mediaCapabilities.decodingInfo({
  type: 'file',
  audio: {
    contentType: 'audio/mp3'
  }
}).then(result => {
  if (result.supported) {
    // mp3 audio is supported!
  }
});

navigator.mediaCapabilities.decodingInfo({
  type: 'file',
  audio: {
    contentType: 'audio/webm;codecs=opus'
  }
}).then(result => {
  if (result.supported) {
    // WebM audio is supported with the opus codec
  }
});
