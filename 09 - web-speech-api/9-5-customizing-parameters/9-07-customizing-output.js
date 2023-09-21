/**
 * Example 9-7. Customizing speech output
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const utteranceLow = new SpeechSynthesisUtterance('This will be spoken slowly in a low tone');
utterance.pitch = 0.1;
utterance.rate = 0.5;
speechSynthesis.speak(utterance);

const utteranceHigh = new SpeechSynthesisUtterance('This will be spoken quickly in a high tone');
utterance.pitch = 2;
utterance.rate = 2;
speechSynthesis.speak(utterance);
