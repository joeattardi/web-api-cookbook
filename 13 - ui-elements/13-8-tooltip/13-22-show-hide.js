/**
 * Example 13-22. Showing and hiding the tooltip
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const button = document.querySelector('#trigger');
const tooltip = document.querySelector('#tooltip');

function showTooltip() {
  // Find the position of the trigger element
  const triggerRect = trigger.getBoundingClientRect();

  // Since the popover is positioned relative to the viewport,
  // you need to account for the scroll offset.
  tooltip.style.top = `${triggerRect.bottom + window.scrollY}px`;
  tooltip.style.left = `${triggerRect.left}px`;

  tooltip.showPopover();
}

// Show and hide the tooltip in response to mouse events.
button.addEventListener('mouseover', () => {
  showTooltip();
});

button.addEventListener('mouseout', () => {
  tooltip.hidePopover();
});

// For keyboard accessibility, also show and hide the tooltip
// in response to focus events.
button.addEventListener('focus', () => {
  showTooltip();
});

button.addEventListener('blur', () => {
  tooltip.hidePopover();
});
