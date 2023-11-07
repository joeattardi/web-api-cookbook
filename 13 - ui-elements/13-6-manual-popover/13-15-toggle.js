/**
 * Example 13-15. The toggle button code
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const trigger = document.querySelector('#trigger');
const popover = document.querySelector('#greeting');
trigger.addEventListener('click', () => {
  popover.togglePopover();
});
