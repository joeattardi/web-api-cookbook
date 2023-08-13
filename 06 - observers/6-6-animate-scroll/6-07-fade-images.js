/**
 * Example 6-7. Fading in all images on the page when they scroll into view
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const observer = new IntersectionObserver(entries => {
  // There are multiple images per row, so there are multiple
  // entries.
  entries.forEach(entry => {
    // Once the element becomes partially visible, apply the animated transition
    if (entry.isIntersecting) {
      // The image is 25% visible, begin the fade-in transition.
      entry.target.style.opacity = 1;

      // No need to observe this element any further
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 }); // Fires when images become 25% visible

// Observe all images on the page. Only images with the `animate`
// class name will be observed, since you might not want to do this to
// all images on the page.
document.querySelectorAll('img.animate').forEach(image => {
  observer.observe(image);
});
