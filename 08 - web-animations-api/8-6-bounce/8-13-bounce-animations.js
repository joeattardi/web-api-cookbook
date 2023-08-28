/**
 * Example 8-13. Applying the bounce animations in series
 * From "Web Browser API Cookbook" by Joe Attardi
 */

async function animateBounce(element) {
  const distances = [ '40px', '20px', '10px' ];
  for (let distance of distances) {
    // Wait for this animation to complete before continuing
    await element.animate([
      // Start at the bottom
      { transform: 'translateY(0)' }, 

      // Move up by the current distance
      { transform: `translateY(-${distance})`, offset: 0.5 },

      // Back to the bottom
      { transform: 'translateY(0)' }
    ], {
      duration: 250,

      // Use a more fluid easing function than linear
      // (the default).
      easing: 'ease-in-out'
    }).finished;
  }
}
