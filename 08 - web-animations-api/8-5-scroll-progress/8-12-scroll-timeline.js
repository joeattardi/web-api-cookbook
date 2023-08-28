/**
 * Example 8-12. Creating the scroll timeline
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const progress = document.querySelector('.scroll-progress');

// Create a timeline that's linked to the document's
// scroll position.
const timeline = new ScrollTimeline({
  source: document.documentElement
});

// Start the animation, passing the timeline you just created.
progress.animate(
  [
    { transform: 'scaleX(0)' },
    { transform: 'scaleX(1)' }
  ],
  { timeline });
  