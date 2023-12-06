/**
 * Example 17-1. Creating a Range
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Given a text node and a substring to highlight, creates a Range object covering the
 * desired text.
 */
function getRange(textNode, textToHighlight) {
  const startOffset = textNode.textContent.indexOf(textToHighlight);
  const endOffset = startOffset + textToHighlight.length;

  // Create a Range for the text to highlight
  const range = new Range();
  range.setStart(textNode, startOffset);
  range.setEnd(textNode, endOffset);

  return range;
}
