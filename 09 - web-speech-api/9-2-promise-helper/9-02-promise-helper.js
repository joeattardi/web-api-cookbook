/**
 * Example 9-2. A Promise helper for speech recognition
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Listens for speech and performs speech recognition.
 * Assumes that speech recognition is available in the current browser.
 * @returns a Promise that is resolved when speech is recognized, and rejects on an error
 */
function captureSpeech() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  const speechPromise = new Promise((resolve, reject) => {
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
