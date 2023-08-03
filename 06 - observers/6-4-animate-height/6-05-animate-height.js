/**
 * Example 6-5. Animating an element's height due to child element changes
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Watches an element for changes to its children. When the height changes
 * due to child changes, animate the change.
 * @param element The element to watch for changes.
 */
function animateHeightChanges(element) {
  // You can't animate an element with `height: auto`, so an explicit
  // height is needed here.
  element.style.height = `${details.offsetHeight}px`;

  // Set a few CSS properties needed for the animated transition.
  element.style.transition = 'height 200ms';
  element.style.overflow = 'hidden';

  /**
   * This observer will fire when the element's child elements
   * change. It measures the new height, then uses `requestAnimationFrame`
   * to update the height. The height change will be animated.
   */
  const observer = new MutationObserver(entries => {
    // `entries` is always an array. There may be times where this array has multiple
    // elements, but in this case the first and only element is what you need.
    const element = entries[0].target;

    // The content has changed, and so the height has as well.
    // There are a few steps to measure the new explicit height.

    // (1) Remember the current height to use for the animation's starting point.
    const currentHeightValue = element.style.height;

    // (2) Set the height to 'auto' and read the `offsetHeight` property. This
    // is the new height to set.
    element.style.height = 'auto';
    const newHeight = element.offsetHeight;

    // (3) Set the current height back before animating.
    element.style.height = currentHeightValue;

    // On the next animation frame, change the height. This will
    // trigger the animated transition.
    requestAnimationFrame(() => {
      element.style.height = `${newHeight}px`;
    });
  });

  // Begin watching the element for changes.
  observer.observe(element, { childList: true });
}
