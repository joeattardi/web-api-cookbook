/**
 * Example 8-16. The loader animations
 * From "Web Browser API Cookbook" by Joe Attardi
 */
async function showLoader(promise) {
  const loader = document.querySelector('#loader');

  // Start the spin animation before fading in
  const spin = loader.animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(360deg)' }
  ], { duration: 1000, iterations: Infinity });

  // Since the opacity is 0, the loader isn't visible yet.
  // Show it with a fade in animation.
  // The loader will continue spinning as it fades in.
  loader.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], { duration: 500, fill: 'both' });

  // Wait for the Promise to resolve
  await promise;

  // The Promise is done. Now, fade the loader out.
  // Don't stop the spin animation until the fade out is complete.
  // You can wait by awaiting the `finished` Promise.
  await loader.animate([
    { opacity: 1 },
    { opacity: 0 }
  ], { duration: 500, fill: 'both' }).finished;

  // Finally, stop the spin animation.
  spin.cancel();

  // Return the original Promise to allow chaining.
  return promise;
}
