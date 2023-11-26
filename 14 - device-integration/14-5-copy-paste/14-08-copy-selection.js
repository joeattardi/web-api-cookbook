/**
 * Example 14-8. Copying text from a selection
 * From "Web Browser API Cookbook" by Joe Attardi
 */

async function copySelection(textarea) {
  const { selectionStart, selectionEnd } = textarea;
  const selectedText = textarea.value.slice(selectionStart, selectionEnd);

  try {
    await navigator.clipboard.writeText(selectedText);
  } catch (error) {
    console.error('Clipboard error:', error);
  }
}
