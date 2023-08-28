/**
 * Example 8-5. Toggling an animation's play state
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Given an animation, toggles the animation state.
 * If the animation is running, it will be paused.
 * If it is paused, it will be resumed.
 */
function toggleAnimation(animation) {
  if (animation.playState === 'running') {
    animation.pause();
  } else {
    animation.play();
  }
}
