/**
 * Example 11-13. Getting the character, word, and sentence count of a string
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function getCounts(text) {
  const characters = new Intl.Segmenter(
    navigator.language,
    { granularity: 'grapheme' }
  );

  const words = new Intl.Segmenter(
    navigator.language,
    { granularity: 'word' }
  );

  const sentences = new Intl.Segmenter(
    navigator.language,
    { granularity: 'sentence' }
  );

  // Convert each segment to an array, then get its length
  return {
    characters: [...characters.segment(text)].length,
    words: [...words.segment(text)].length,
    sentences: [...sentences.segment(text)].length
  };
}
