/**
 * Example 8-14. Combining two transform animations
 * From "Web Browser API Cookbook" by Joe Attardi
 */
// The first animation will move the element back and forth on the X axis
element.animate([
  { transform: 'translateX(0)' },
  { transform: 'translateX(250px)' }
], {
  // Animate for 5 seconds
  duration: 5000,
  // Run the animation forwards, then run it in reverse
  direction: 'alternate',
  // Repeat the animation forever
  iterations: Infinity,
  // Slow to start, fast in the middle, slow at the end
  easing: 'ease-in-out'
});

// The second animation rotates the element
element.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
], {
  // Animate for 3 seconds
  duration: 3000,
  // Repeat the animation forever
  iterations: Infinity,
  // Combine the effects with other running animations
  composite: 'add'
});
