/**
 * Example 6-1. Lazily loading an image with IntersectionObserver
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Observes an image element for lazy loading.
 * 
 * @param img a reference to the image DOM node
 * @param url the URL of the image to load
 */
function lazyLoad(img, url) {
  const observer = new IntersectionObserver(entries => {
    // isIntersecting becomes true once the image enters the viewport.
    // At that point set the src URL, and stop listening.
    if (entries[0].isIntersecting) {
      img.src = url;
      observer.disconnect();
    }
  });

  // Start observing the image element
  observer.observe(img);
}
