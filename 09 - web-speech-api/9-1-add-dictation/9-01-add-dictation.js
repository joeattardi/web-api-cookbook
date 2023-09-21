/**
 * Example 9-1. Adding basic dictation to a text field
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Starts listening for speech. When speech is recognized, it is appended
 * to the given text field's value. 
 * Recognition continues until the returned recognition object is stopped.
 *
 * @param textField A text field to append to
 * @returns The recognition object
 */
function startDictation(textField) {
  // Only proceed if this browser supports speech recognition
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;

    recognition.addEventListener('result', event => {
      const result = event.results[event.resultIndex];
      textField.value += result[0].transcript;
    });

    recognition.addEventListener('error', event => {
      console.log('error', event);
    });

    recognition.start();

    // Return the recognition object so recognition
    // can be stopped later (like when the user clicks a toggle button).
    return recognition;
  }
}
