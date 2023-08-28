/**
 * Example 8-7. Removing an element with an animation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Removes an element from the DOM after performing a fade out animation.
 * @param element The element to remove
 */
async function removeElement(element) {
  // First, perform the animation and make the element disappear from view.
  // The resulting animation's `finished` property is a Promise.
  await element.animate([
    { opacity: 1 },
    { opacity: 0 }
  ], { duration: 250 }).finished;

  // Animation is done, now remove the element from the DOM.
  element.remove();
}
