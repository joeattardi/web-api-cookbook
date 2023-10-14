/**
 * Example 9-2. A Promise helper for speech recognition
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Listens for speech and performs speech recognition.
 * Assumes that speech recognition is available in the current browser.
 * @returns a Promise that is resolved with the recognized transcript when speech is recognized, and rejects on an error
 */
function captureSpeech() {
  const speechPromise = new Promise((resolve, reject) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    // If this browser doesn't support speech recognition, reject the Promise
    if (!SpeechRecognition) {
      reject('Speech recognition is not supported on this browser.')
    }

    const recognition = new SpeechRecognition();

    // Resolve the promise on successful speech recognition
    recognition.addEventListener('result', event => {
      const result = event.results[event.resultIndex];
      resolve(result[0].transcript);
    });

    recognition.addEventListener('error', event => {
      // Reject the promise if there was a recognition error
      reject(event);
    });

    // Start listening for speech
    recognition.start();
  });

  // Whether there was successful speech recognition or an error, make sure
  // the recognition engine has stopped listening.
  return speechPromise.finally(() => {
    recognition.stop();
  });
}
