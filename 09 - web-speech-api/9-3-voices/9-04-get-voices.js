/**
 * Example 9-4. Getting the list of available speech synthesis voices
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function showVoices() {
  voices.innerHTML = '';
  speechSynthesis.getVoices().forEach(voice => {
    console.log('Voice:', voice.name);
  });
}

speechSynthesis.addEventListener('voiceschanged', () => showVoices());
showVoices();
