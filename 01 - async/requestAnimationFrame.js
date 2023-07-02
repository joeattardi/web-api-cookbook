const animationSeconds = 2; // Animate over 2 seconds
const fps = 60; // A nice smooth animation

// The time interval between each frame.
const frameInterval = 1000 / fps;

// The total number of frames for the animation.
const frameCount = animationSeconds * fps;

// The amount to adjust the opacity by in each frame.
const opacityIncrement = 1 / frameCount;

// The timestamp of the last frame.
let lastTimestamp;

// The starting opacity value
let opacity = 1;

function fade(timestamp) {
  // Set the last timestamp to now if there isn't an existing one.
  if (!lastTimestamp) {
    lastTimestamp = timestamp;
  }

  // Calculate how much time has elapsed since the last frame.
  // If not enough time has passed yet, schedule another call of this
  // function and return.
  const elapsed = timestamp - lastTimestamp;
  if (elapsed < frameInterval) {
    requestAnimationFrame(animate);
    return;
  }

  // Time for a new animation frame. Remember this timestamp.
  lastTimestamp = timestamp;

  // Adjust the opacity value and make sure it doesn't go below 0.
  opacity = Math.max(0, opacity - opacityIncrement)
  box.style.opacity = opacity;

  // If the opacity hasn't reached the target value of 0, schedule another
  // call to this function.
  if (opacity > 0) {
    requestAnimationFrame(animate);
  }
}

// Schedule the first call to the animation function
requestAnimationFrame(fade);
