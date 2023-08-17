/**
 * Example 6-2. Wrapping an IntersectionObserver with a Promise
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Returns a Promise that is resolved once the given element enters the viewport.
 */
function waitForElement(element) {
  return new Promise(resolve => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        resolve();
      }
    });

    observer.observe(element);
  });
}
