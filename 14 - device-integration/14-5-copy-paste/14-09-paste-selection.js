/**
 * Example 14-9. Pasting text into a selection
 * From "Web Browser API Cookbook" by Joe Attardi
 */

async function pasteToSelection(textarea) {
  const currentValue = textarea.value;
  const { selectionStart, selectionEnd } = textarea;

  try {
    const clipboardValue = await navigator.clipboard.readText();
    const newValue = currentValue.slice(0, selectionStart) + clipboardValue + currentValue.slice(selectionEnd);
    textarea.value = newValue;
  } catch (error) {
    console.error('Clipboard error:', error);
  }
}
