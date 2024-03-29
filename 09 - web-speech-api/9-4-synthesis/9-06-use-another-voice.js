/**
 * Example 9-6. Using another voice
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// assuming the voices are available now
const aliceVoice = speechSynthesis
  .getVoices()
  .find(voice => voice.name === 'Alice');

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);

  // Make sure the "Alice" voice was found
  if (aliceVoice) {
    utterance.voice = aliceVoice;
  }

  speechSynthesis.speak(utterance);
}
