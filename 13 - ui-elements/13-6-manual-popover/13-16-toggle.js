/**
 * Example 13-16. The toggle button code
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const trigger = document.querySelector('#trigger');
const popover = document.querySelector('#greeting');
trigger.addEventListener('click', () => {
  popover.togglePopover();
});
