/**
 * Example 8-8. The hover effect
 * From "Web Browser API Cookbook" by Joe Attardi
 */

element.addEventListener('mouseover', async () => {
  if (animation) {
    // There was already an animation in progress. Instead of starting a new animation,
    // reverse the current one.
    animation.reverse();
  } else {
    // Nothing is in progress, so start a new animation.
    animation = element.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(2)' }
    ], { duration: 1000, fill: 'both' });

    // Once the animation finishes, set the current animation to null.
    await animation.finished;
    animation = null;
  }
});
