/**
 * Example 13-18. Setting the popover's position
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const popover = document.querySelector('#popover');
const trigger = document.querySelector('#trigger');

popover.addEventListener('toggle', event => {
  // Update the position if the popover is being opened
  if (event.newState === 'open') {
    // Find the position of the trigger element
    const triggerRect = trigger.getBoundingClientRect();

    // Since the popover is positioned relative to the viewport,
    // you need to account for the scroll offset.
    popover.style.top = `${triggerRect.bottom + window.scrollY}px`;
    popover.style.left = `${triggerRect.left}px`;
  }
});
