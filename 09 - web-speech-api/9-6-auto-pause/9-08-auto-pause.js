/**
 * Example 9-8. Pausing speech when the page becomes hidden
 * From "Web Browser API Cookbook" by Joe Attardi
 */

document.addEventListener('visibilitychange', () => {
  // speechSynthesis.speaking will be true:
  // (1) when speech is currently being spoken
  // (2) when speech was being spoken, but is paused
  if (speechSynthesis.speaking) {
    if (document.visibilityState === 'hidden') {
      speechSynthesis.pause();
    } else if (document.visibilityState === 'visible') {
      speechSynthesis.resume();
    }
  }
});
