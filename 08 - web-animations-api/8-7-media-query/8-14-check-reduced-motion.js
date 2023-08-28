/**
 * Example 8-14. Using the prefers-reduced-motion media query
 * From "Web Browser API Cookbook" by Joe Attardi
 */

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Reduced motion is not enabled, animate normally
} else {
  // Skip this animation, or run a less intense one
}
