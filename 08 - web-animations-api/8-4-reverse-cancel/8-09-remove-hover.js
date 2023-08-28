/**
 * Example 8-9. Removing the hover effect
 * From "Web Browser API Cookbook" by Joe Attardi
 */

button.addEventListener('mouseout', async () => {
  if (animation) {
    // There was already an animation in progress. Instead of starting a new animation,
    // reverse the current one.
    animation.reverse();
  } else {
    // Nothing is in progress, so start a new animation.
    animation = button.animate([
      { transform: 'scale(2)' },
      { transform: 'scale(1)' }
    ], { duration: 1000, fill: 'both' });

    // Once the animation finishes, set the current animation to null.
    await animation.finished;
    animation = null;
  }
});
