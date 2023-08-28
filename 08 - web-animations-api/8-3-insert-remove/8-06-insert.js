/**
 * Example 8-6. Showing an element with an animation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Shows an element that was just added to the DOM with a fade in animation.
 * @param element The element to show
 */
function showElement(element) {
  document.body.appendChild(element);
  element.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], { duration: 250 });
}
