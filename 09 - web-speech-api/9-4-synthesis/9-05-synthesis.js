/**
 * Example 9-5. Speaking some text with the Web Speech API
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
