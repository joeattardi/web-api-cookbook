/**
 * Example 8-4. Performing the ripple animation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

button.addEventListener('click', async event => {
  // Create the temporary element for the ripple, set its class, and
  // add it to the button.
  const ripple = document.createElement('div');
  ripple.className = 'ripple';

  // Find the largest dimension (width or height) of the button, and
  // use that as the ripple's size.
  const rippleSize = Math.max(button.offsetWidth, button.offsetHeight);
  ripple.style.width = `${rippleSize}px`;
  ripple.style.height = `${rippleSize}px`;

  // Center the ripple element on the click location.
  ripple.style.top = `${event.offsetY - (rippleSize / 2)}px`;
  ripple.style.left = `${event.offsetX - (rippleSize / 2)}px`;

  button.appendChild(ripple);
  
  // Perform the ripple animation, and wait for it to complete.
  await ripple.animate([
    { transform: 'scale(0)', opacity: 0.5 },
    { transform: 'scale(2.5)', opacity: 0 }
  ], {
    duration: 500,
    easing: 'ease-in'
  }).finished;

  // All done, remove the ripple element
  ripple.remove();
});
