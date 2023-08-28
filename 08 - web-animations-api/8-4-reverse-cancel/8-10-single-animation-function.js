/**
 * Example 8-10. A single animation function
 * From "Web Browser API Cookbook" by Joe Attardi
 */

async function animate(element, direction) {
  if (animation) {
    animation.reverse();
  } else {
    animation = element.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(2)' }
    ], { duration: 1000, fill: 'forwards', direction });

    await animation.finished;
    animation = null;
  }
}

element.addEventListener('mouseover', () => {
  animate(element, 'normal');
});

element.addEventListener('mouseout', () => {
  animate(element, 'reverse');
});
