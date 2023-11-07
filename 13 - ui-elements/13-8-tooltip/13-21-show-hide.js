/**
 * Example 13-21. Showing and hiding the tooltip
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const button = document.querySelector('#trigger');
const tooltip = document.querySelector('#tooltip');

button.addEventListener('mouseover', () => {
  // Find the position of the trigger element
  const triggerRect = trigger.getBoundingClientRect();

  // Since the popover is positioned relative to the viewport,
  // you need to account for the scroll offset.
  tooltip.style.top = `${triggerRect.bottom + window.scrollY}px`;
  tooltip.style.left = `${triggerRect.left}px`;

  tooltip.showPopover();
});

button.addEventListener('mouseout', () => {
  tooltip.hidePopover();
});
